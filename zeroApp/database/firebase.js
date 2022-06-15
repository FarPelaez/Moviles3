// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWU6sdoxqfYR413WbqacueehpIfCtCZf0",
    authDomain: "zeroapp-f0a5f.firebaseapp.com",
    projectId: "zeroapp-f0a5f",
    storageBucket: "zeroapp-f0a5f.appspot.com",
    messagingSenderId: "798336835662",
    appId: "1:798336835662:web:a89ce660ed9d2615bf631f",
    measurementId: "G-GBZ5P7X62L"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
