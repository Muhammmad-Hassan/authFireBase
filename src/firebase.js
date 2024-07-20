// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeprZjg9JbQrH7_UNU0CMb2qbbUzGTiQA",
  authDomain: "authapp-b267a.firebaseapp.com",
  projectId: "authapp-b267a",
  storageBucket: "authapp-b267a.appspot.com",
  messagingSenderId: "226424720513",
  appId: "1:226424720513:web:13ff419f8f856fe8b5d180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const   auth = getAuth(app)