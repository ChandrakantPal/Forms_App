import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCcpQM6fO3MLHee22EP4Y-DgnP31nHvcXU",
    authDomain: "mynote-6cbf0.firebaseapp.com",
    databaseURL: "https://mynote-6cbf0.firebaseio.com",
    projectId: "mynote-6cbf0",
    storageBucket: "mynote-6cbf0.appspot.com",
    messagingSenderId: "781606816984",
    appId: "1:781606816984:web:4d792603e5fbfbaada1bad"
};
firebase.initializeApp(config);


export default firebase