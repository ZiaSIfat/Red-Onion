// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIQ03lo-Y-IHTmNXtcS_0a3pKz6Q3_M2Y",
    authDomain: "red-onion-37d03.firebaseapp.com",
    projectId: "red-onion-37d03",
    storageBucket: "red-onion-37d03.appspot.com",
    messagingSenderId: "468182396713",
    appId: "1:468182396713:web:af3ae1a1496065f736d138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;