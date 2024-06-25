// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYrpAZjXMILELEcEPqO21ugOPWSipkRPc",
  authDomain: "mobile-9ad86.firebaseapp.com",
  projectId: "mobile-9ad86",
  storageBucket: "mobile-9ad86.appspot.com",
  messagingSenderId: "322234444844",
  appId: "1:322234444844:web:7d91f97c1092c490987589",
  measurementId: "G-4PPKZLGLTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  