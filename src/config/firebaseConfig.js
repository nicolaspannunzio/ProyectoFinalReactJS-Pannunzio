import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt2FQoNwZ0F3yZS6yNOaBrZo1kWPqr36g",
  authDomain: "coder-proyecto-8e59f.firebaseapp.com",
  projectId: "coder-proyecto-8e59f",
  storageBucket: "coder-proyecto-8e59f.appspot.com",
  messagingSenderId: "772519192153",
  appId: "1:772519192153:web:1a7f53c3775b39d2a73348"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);