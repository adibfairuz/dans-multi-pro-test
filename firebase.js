/* eslint-disable import/prefer-default-export */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAgU_6DPfuNgqVzlA3KzculAA2ImzXcNLg',
    authDomain: 'percobaan-d2eaa.firebaseapp.com',
    databaseURL: 'https://percobaan-d2eaa.firebaseio.com',
    projectId: 'percobaan-d2eaa',
    storageBucket: 'percobaan-d2eaa.appspot.com',
    messagingSenderId: '685688423899',
    appId: '1:685688423899:web:a31b4eaf99829aa6f6d3fe',
    measurementId: 'G-W12H3W9VWE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);