import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyCIrJGupIIJyOywzQ-gf8riCgHqY7kxI5Y",
  authDomain: "sample-messaging-8bbc9.firebaseapp.com",
  databaseURL: "https://sample-messaging-8bbc9.firebaseio.com",
  projectId: "sample-messaging-8bbc9",
  storageBucket: "sample-messaging-8bbc9.appspot.com",
  messagingSenderId: "936932865099",
  appId: "1:936932865099:web:e74a6fd0f471ae835209ce",
  measurementId: "G-9HQLYJ9LQ3"
};
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  
  export default fire;