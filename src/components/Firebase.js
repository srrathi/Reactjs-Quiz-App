import firebase from 'firebase';
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBS5gqxDdG8VZ72h0Ncofo9jaelb4q2J4o",
    authDomain: "react-quiz-app-33aaa.firebaseapp.com",
    databaseURL: "https://react-quiz-app-33aaa-default-rtdb.firebaseio.com",
    projectId: "react-quiz-app-33aaa",
    storageBucket: "react-quiz-app-33aaa.appspot.com",
    messagingSenderId: "147153930008",
    appId: "1:147153930008:web:8d63ac99dc82db88b3006d"
});

var db = firebaseApp.database();
export { db };