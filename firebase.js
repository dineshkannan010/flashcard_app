// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1hzhM5kaGKR-h20XLY95ZNJDmREDxvz4",
  authDomain: "flashcardapp-9596e.firebaseapp.com",
  projectId: "flashcardapp-9596e",
  storageBucket: "flashcardapp-9596e.appspot.com",
  messagingSenderId: "249538729432",
  appId: "1:249538729432:web:28523ea2cb9a256247cead",
  measurementId: "G-YLE630KXQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);