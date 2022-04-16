// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfoKBX9TfsK-sj-fmED2WnVoX7h1cI7iI",
  authDomain: "fire-contact-app-1ccf8.firebaseapp.com",
  databaseURL: "https://fire-contact-app-1ccf8-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-1ccf8",
  storageBucket: "fire-contact-app-1ccf8.appspot.com",
  messagingSenderId: "322456933148",
  appId: "1:322456933148:web:53da20b1d6af3ef08d60d9",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
