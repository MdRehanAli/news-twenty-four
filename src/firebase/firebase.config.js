// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_g-5FRh-RHX1cn32bCii5As0QdiJ8AsE",
  authDomain: "news-tewnty-four.firebaseapp.com",
  projectId: "news-tewnty-four",
  storageBucket: "news-tewnty-four.appspot.com",
  messagingSenderId: "582809994467",
  appId: "1:582809994467:web:116efb2ea1617e849631d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app