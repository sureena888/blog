import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSp2P8H_WB_bEXs9SXmo9xqnP-TEb8q2o",
  authDomain: "blog-hw3-6be24.firebaseapp.com",
  projectId: "blog-hw3-6be24",
  storageBucket: "blog-hw3-6be24.appspot.com",
  messagingSenderId: "268509799150",
  appId: "1:268509799150:web:6de9c99de2f628575909ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)