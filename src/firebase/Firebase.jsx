import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhNCEpTRQJne0TQIsUFoz7RJ-Ie6PAXTg",

  authDomain: "restaurant-delizia.firebaseapp.com",

  projectId: "restaurant-delizia",

  storageBucket: "restaurant-delizia.appspot.com",

  messagingSenderId: "921974393445",

  appId: "1:921974393445:web:8b52334b9340670d48948c",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

