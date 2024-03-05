// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOxF8JqUNrWcJvYSpRnVyfjheAQLGpBCw",
  authDomain: "linkly-project.firebaseapp.com",
  projectId: "linkly-project",
  storageBucket: "linkly-project.appspot.com",
  messagingSenderId: "219334417422",
  appId: "1:219334417422:web:3f9c37474100e0b5ebf05f",
  measurementId: "G-TYL5852P8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);