import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key="AIzaSyCsYw21fw1Pqu0lvJ5msXYmYhUbrc8bchs"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your keys",
  authDomain: "",
  projectId: "",
  storageBucket: "" ,
  messagingSenderId: "9",
  appId: ""
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore()
