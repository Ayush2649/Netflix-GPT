// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp6IzJ1u_KB_SD90An_jWdRNDXE7ei5is",
  authDomain: "netflixgpt-9d662.firebaseapp.com",
  projectId: "netflixgpt-9d662",
  storageBucket: "netflixgpt-9d662.firebasestorage.app",
  messagingSenderId: "182174674544",
  appId: "1:182174674544:web:1a070049e144de66c38eb5",
  measurementId: "G-51KG7ZZZ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);