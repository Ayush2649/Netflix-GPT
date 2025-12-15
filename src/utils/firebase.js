// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp6IzJ1u_KB_SD90An_jWdRNDXE7ei5is",
  authDomain: "netflixgpt-9d662.firebaseapp.com",
  projectId: "netflixgpt-9d662",
  storageBucket: "netflixgpt-9d662.firebasestorage.app",
  messagingSenderId: "182174674544",
  appId: "1:182174674544:web:1a070049e144de66c38eb5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
