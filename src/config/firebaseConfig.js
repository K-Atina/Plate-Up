// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: ProcessingInstruction.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: ProcessingInstruction.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: ProcessingInstruction.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ProcessingInstruction.env,
  appId: ProcessingInstruction.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: ProcessingInstruction.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);