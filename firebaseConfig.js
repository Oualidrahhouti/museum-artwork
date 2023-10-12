// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI07gp1QTEBZijBcu47fuVIIzIw6XYWjs",
  authDomain: "museum-artwork.firebaseapp.com",
  projectId: "museum-artwork",
  storageBucket: "museum-artwork.appspot.com",
  messagingSenderId: "263433751926",
  appId: "1:263433751926:web:e73523e5b1ec335ef4be57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(db);
export default db;