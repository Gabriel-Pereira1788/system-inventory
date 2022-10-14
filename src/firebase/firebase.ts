// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseProvider from "../providers/firebaseProvider";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebaseProvider.key,
  authDomain: firebaseProvider.domain,
  projectId: firebaseProvider.projectId,
  storageBucket: firebaseProvider.storage,
  messagingSenderId: firebaseProvider.senderId,
  appId: firebaseProvider.appId,
  measurementId: firebaseProvider.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
