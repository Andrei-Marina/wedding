import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_Us4xoUIrrDDYJqjT5BV8heI876zAKTs",
  authDomain: "wedding-19482.firebaseapp.com",
  projectId: "wedding-19482",
  storageBucket: "wedding-19482.appspot.com",
  messagingSenderId: "1079356949583",
  appId: "1:1079356949583:web:b67dbc27e244a7cfe7563a",
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   };
const app: FirebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db: Firestore = getFirestore(app);

export { db, auth };
