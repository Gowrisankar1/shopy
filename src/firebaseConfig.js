// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe7QR2i-pvnGzK7NXcDmb25lOrpRs21-o",
  authDomain: "shopy-35421.firebaseapp.com",
  projectId: "shopy-35421",
  storageBucket: "shopy-35421.appspot.com",
  messagingSenderId: "180701849708",
  appId: "1:180701849708:web:67061c8a11acff5025d049",
  measurementId: "G-10LD2J3R9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore (or Realtime Database if you're using that)
const db = getFirestore(app);

export { db };