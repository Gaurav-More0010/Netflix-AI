// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjH_yyicb_rmPXLXvE-hozoGOVgV8dFC4",
  authDomain: "netflix-ai.firebaseapp.com",
  projectId: "netflix-ai",
  storageBucket: "netflix-ai.appspot.com",
  messagingSenderId: "945667608681",
  appId: "1:945667608681:web:e48ea9d060330dfd7d12f8",
  measurementId: "G-HCN630H7DV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
