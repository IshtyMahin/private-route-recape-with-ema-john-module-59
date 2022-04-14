// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsZh8SJzOUxBDrx4sRMGkwEMBERBVDUIY",
  authDomain: "ema-john-simple-943ff.firebaseapp.com",
  projectId: "ema-john-simple-943ff",
  storageBucket: "ema-john-simple-943ff.appspot.com",
  messagingSenderId: "912118404846",
  appId: "1:912118404846:web:5e2fb4e236a173d033c5ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;