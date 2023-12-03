// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// FIREBASE CONFIG OBJECT WILL BE HERE. IT HAS BEEN REMOVED FOR SECURITY PURPOSE
const firebaseConfig = {
    apiKey: "AIzaSyBnztWOaySd-GPDrnpjKHKNGyjMw31g6F0",
    authDomain: "full-stack-ecommerce-app-cc57d.firebaseapp.com",
    projectId: "full-stack-ecommerce-app-cc57d",
    storageBucket: "full-stack-ecommerce-app-cc57d.appspot.com",
    messagingSenderId: "785258486816",
    appId: "1:785258486816:web:0d120837c5e9ee0c6bb045",
    measurementId: "G-SV00JHSYTP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);