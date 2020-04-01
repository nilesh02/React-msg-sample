import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import textarea from '@material-ui/core';
import './App.css';
import ReactFileReader from 'react-file-reader';
import CSVReader from 'react-csv-reader'

export default class SendMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            phoneNumber:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleFiles=this.handleFiles.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleFiles(data,fileInfo){
        var temp='';
        for(let i=1;i<data.length-1;i++){
            if(i==data.length-2){
                temp=temp+'91'+data[i][1];
            }
            else{
                temp=temp+'91'+data[i][1]+',';
            }
        }
        this.setState({phoneNumber:temp});
        console.log(this.state.phoneNumber);
    }

    async sendMessage() {
        for (let i = 0; i < this.state.result.length; i++) {
            console.log(this.state.result[i]);
        }
        var params = {
            username: 'nileshrathi2dec@gmail.com',
            hash: '44393bb2eb8fc745359b554afda35df29fbda0dc6566a9412cf1ba4ff6390592',
            message: this.state.value,
            sender: 'TXTLCL',
            numbers: this.state.phoneNumber,
            test: '0'
        };

        var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        var request = {
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
                    <img src={logo} className="App-logo" alt="logo" />
                    <textarea className="send-msg" value={this.state.value} onChange={this.handleChange} />
                    <Button className="btn-snd-msg" variant="contained" color="primary" onClick={this.sendMessage}>
                        Send Message
                    </Button>
                    {/* <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                        <button className='btn'>Upload</button>
                    </ReactFileReader> */}
                    <CSVReader onFileLoaded={(data, fileInfo) => this.handleFiles(data, fileInfo)} />
                </header>
            </div>
        );
    }
}
