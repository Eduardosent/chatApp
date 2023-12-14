import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key="AIzaSyCsYw21fw1Pqu0lvJ5msXYmYhUbrc8bchs"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsYw21fw1Pqu0lvJ5msXYmYhUbrc8bchs",
  authDomain: "chatapp-c7ef7.firebaseapp.com",
  projectId: "chatapp-c7ef7",
  storageBucket: "chatapp-c7ef7.appspot.com" ,
  messagingSenderId: "907262581888",
  appId: "1:907262581888:web:f48fab9804b95f32b49a65"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore()