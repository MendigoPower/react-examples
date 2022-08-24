// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY1Mb93fSfqcVgErmRYi4G4_tgQTO5iuk",
  authDomain: "blog-post-7f97b.firebaseapp.com",
  projectId: "blog-post-7f97b",
  storageBucket: "blog-post-7f97b.appspot.com",
  messagingSenderId: "228376639401",
  appId: "1:228376639401:web:c305673710403b3a42b6b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);