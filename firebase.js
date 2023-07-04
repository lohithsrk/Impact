// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIdBn8NYKHU4hiBJmDqfc51lNYU6L7gvc",
  authDomain: "impact-dc76e.firebaseapp.com",
  projectId: "impact-dc76e",
  storageBucket: "impact-dc76e.appspot.com",
  messagingSenderId: "380420132258",
  appId: "1:380420132258:web:68ec6dcee0bce84a88f6fb",
  measurementId: "G-ERYS2NYQLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);