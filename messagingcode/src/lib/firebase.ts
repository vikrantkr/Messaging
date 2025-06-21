// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDizjhcpFqBkEu28lZNwr75VndJFvlVfbA",
  authDomain: "agenticuser.firebaseapp.com",
  projectId: "agenticuser",
  storageBucket: "agenticuser.firebasestorage.app",
  messagingSenderId: "230795549071",
  appId: "1:230795549071:web:4dc0facd9d2b7faa57d3fa",
  measurementId: "G-R5GZVNCFFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where };