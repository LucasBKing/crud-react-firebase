import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBQdkJSNP9QUzs4NV85E1L5ErzrsXQrozI",
    authDomain: "blog-react-4eec3.firebaseapp.com",
    databaseURL: "https://blog-react-4eec3.firebaseio.com",
    projectId: "blog-react-4eec3",
    storageBucket: "blog-react-4eec3.appspot.com",
    messagingSenderId: "251388176857"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
