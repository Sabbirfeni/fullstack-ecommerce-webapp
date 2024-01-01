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
  apiKey: "AIzaSyDf2MGHisKSy3Enjh-G0AjbSXkhYEbtg4k",
  authDomain: "filicx-63414.firebaseapp.com",
  projectId: "filicx-63414",
  storageBucket: "filicx-63414.appspot.com",
  messagingSenderId: "851651296635",
  appId: "1:851651296635:web:3209478b9172dcbfc4d1de",
  measurementId: "G-9HT3GNSHSC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
