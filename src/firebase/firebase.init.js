// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATuZdOW2Q-zCuaXzldv28gWxSmTnRUrAw",
  authDomain: "coffee-house-management.firebaseapp.com",
  projectId: "coffee-house-management",
  storageBucket: "coffee-house-management.firebasestorage.app",
  messagingSenderId: "537882527584",
  appId: "1:537882527584:web:896b69ca3214e543f7c005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);