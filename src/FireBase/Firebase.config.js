// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZlPM-dv05-gzguMUkYhgiABvQD4hAwIc",
  authDomain: "volunteer-49958.firebaseapp.com",
  projectId: "volunteer-49958",
  storageBucket: "volunteer-49958.appspot.com",
  messagingSenderId: "690224640755",
  appId: "1:690224640755:web:1e9d16a2191e84ffc13d86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

