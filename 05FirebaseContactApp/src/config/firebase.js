// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiSF1332KpvH2Czhas-OP4RS86Ck84kXk",
  authDomain: "vite-contact-f3175.firebaseapp.com",
  projectId: "vite-contact-f3175",
  storageBucket: "vite-contact-f3175.appspot.com",
  messagingSenderId: "312566330299",
  appId: "1:312566330299:web:82ed78e2270fb3fb064a9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
