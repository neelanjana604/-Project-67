import firebase from 'firebase';

// add SDK Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRsPDFHJOLkYnY46iHbTr0dEovuLJMLj0",
  authDomain: "voting-app-7c95a.firebaseapp.com",
  projectId: "voting-app-7c95a",
  storageBucket: "voting-app-7c95a.appspot.com",
  messagingSenderId: "334846688641",
  appId: "1:334846688641:web:b2795152dab995c6a73c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();