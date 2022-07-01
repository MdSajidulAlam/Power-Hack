// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6sztCsAAZA-MhKF0eXb5RuRVEpcYMYok",
    authDomain: "power-hack-e7f91.firebaseapp.com",
    projectId: "power-hack-e7f91",
    storageBucket: "power-hack-e7f91.appspot.com",
    messagingSenderId: "1060202966144",
    appId: "1:1060202966144:web:7bdf08896aaa35f3fd4a65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth