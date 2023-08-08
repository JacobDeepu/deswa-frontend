// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAj9r2Qw2xD3tgBLWJFZR_GkqDoTQ19mkI",
    authDomain: "deswa-75f30.firebaseapp.com",
    projectId: "deswa-75f30",
    storageBucket: "deswa-75f30.appspot.com",
    messagingSenderId: "294742938437",
    appId: "1:294742938437:web:400abbd9071c5b040e242c",
    measurementId: "G-BQZHFXWWBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
