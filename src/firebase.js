import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2sk5ArccsFfKE0vKDvn3NjcOX7Jb4TtY",
  authDomain: "shopai-6ae4e.firebaseapp.com",
  projectId: "shopai-6ae4e",
  storageBucket: "shopai-6ae4e.firebasestorage.app",
  messagingSenderId: "945205834059",
  appId: "1:945205834059:web:00bda5217d1c4221c338ce",
  measurementId: "G-J2BG16KE3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize service
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)


export { auth, db, storage }
