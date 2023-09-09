// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkYWKqDWzlMCVIPYpuQkPL8j1WHc4I9lY",
  authDomain: "bloggin-app-438bb.firebaseapp.com",
  projectId: "bloggin-app-438bb",
  storageBucket: "bloggin-app-438bb.appspot.com",
  messagingSenderId: "788012591466",
  appId: "1:788012591466:web:8fa97a9dd492a15daf1d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);