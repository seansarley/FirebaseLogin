// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP8SwnJPmBfhAMPQWTJ9XH_yXgmjcl81M",
  authDomain: "fir-login-73a92.firebaseapp.com",
  projectId: "fir-login-73a92",
  storageBucket: "fir-login-73a92.firebasestorage.app",
  messagingSenderId: "641829736357",
  appId: "1:641829736357:web:80f79a6bafe2eaa08b224c",
  measurementId: "G-CQ4RZL0LCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };