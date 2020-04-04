import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import textarea from '@material-ui/core';
import './App.css';
import CSVReader from 'react-csv-reader'

export default class SendMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            phoneNumber: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleFiles(data, fileInfo) {
        let temp = '';
        for (let i = 1; i < data.length - 1; i++) {
            if (i === data.length - 2) {
                temp = temp + '91' + data[i][1];
            } else {
                temp = temp + '91' + data[i][1] + ',';
            }
        }
        this.setState({phoneNumber: temp});
        console.log(this.state.phoneNumber);
    }

    async sendMessage() {
        let params = {
            username: 'krishna.lahoti96@gmail.com',
            hash: '6e32093a03fc522ddf340140e073127562a23897fcf5175146a6765994f65320',
            message: this.state.value,
            sender: 'TXTLCL',
            numbers: this.state.phoneNumber,
            test: '0'
        };

        let formData = new FormData();

        for (let k in params) {
            formData.append(k, params[k]);
        }

        let request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: 'no-cors',
            body: formData
        };

        await fetch("http://api.textlocal.in/send/?", request);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <textarea className="send-msg" value={this.state.value} onChange={this.handleChange}/>
                    <Button className="btn-snd-msg" variant="contained" color="primary" onClick={this.sendMessage}>
                        Send Message
                    </Button>
                    <CSVReader onFileLoaded={(data, fileInfo) => this.handleFiles(data, fileInfo)}/>
                </header>
            </div>
        );
    }
}
