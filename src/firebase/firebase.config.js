// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbWcGzZVnd35-K7TGbor8yCzPJq2TOMic",
  authDomain: "ema-jhon-shop-with-auth-bc05d.firebaseapp.com",
  projectId: "ema-jhon-shop-with-auth-bc05d",
  storageBucket: "ema-jhon-shop-with-auth-bc05d.appspot.com",
  messagingSenderId: "133931772576",
  appId: "1:133931772576:web:9202147bce6cfe4abfb7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;