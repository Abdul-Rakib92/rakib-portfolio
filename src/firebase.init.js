// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0fsbMF13EBMcxWceBzy9GE71Ls-snd5c",
  authDomain: "rakib-portfolio-97502.firebaseapp.com",
  projectId: "rakib-portfolio-97502",
  storageBucket: "rakib-portfolio-97502.appspot.com",
  messagingSenderId: "906209278543",
  appId: "1:906209278543:web:20cfd84a03266737af083a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
