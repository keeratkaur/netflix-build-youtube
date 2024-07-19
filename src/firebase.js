// Import the functions you need from the SDKs you need
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// If you are using Firestore, include it too
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWenphaJnO04ZQToH086RNPuHB2rq7pNY",
  authDomain: "netflixclonek.firebaseapp.com",
  projectId: "netflixclonek",
  storageBucket: "netflixclonek.appspot.com",
  messagingSenderId: "913480215106",
  appId: "1:913480215106:web:b7a45d8dcf9a0ecc981bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app); // firestore: tells what users subscription is.
const auth = getAuth(app);

export { auth };
export default db;
