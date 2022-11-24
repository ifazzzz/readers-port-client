// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG1NQ18BvkhYy4YesPM5rBMI9Puc0Khso",
  authDomain: "readers-port.firebaseapp.com",
  projectId: "readers-port",
  storageBucket: "readers-port.appspot.com",
  messagingSenderId: "787458410303",
  appId: "1:787458410303:web:a6e9041c23d91f6815758a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;