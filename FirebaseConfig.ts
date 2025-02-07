// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnVeUNGh-IKfjoh8OHoif8sUJRYtT5Bn0",
  authDomain: "auth-27438.firebaseapp.com",
  projectId: "auth-27438",
  storageBucket: "auth-27438.firebasestorage.app",
  messagingSenderId: "56469582041",
  appId: "1:56469582041:web:f7fb79687e5de0aeabcec8",
  measurementId: "G-5C7JNCX0FW"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);