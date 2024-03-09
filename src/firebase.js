// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBscC9tOMzDOpUM5oxp8yJB3SWeFG58GRA",
  authDomain: "duckhiem-website.firebaseapp.com",
  projectId: "duckhiem-website",
  storageBucket: "duckhiem-website.appspot.com",
  messagingSenderId: "29537289073",
  appId: "1:29537289073:web:79cd15359cb1751ada2cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);