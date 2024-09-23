import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0g-R8idLyPasi_3b4pmnXFWQQ71mKdY8",
    authDomain: "vinilos-58bfb.firebaseapp.com",
    projectId: "vinilos-58bfb",
    storageBucket: "vinilos-58bfb.appspot.com",
    messagingSenderId: "350967178757",
    appId: "1:350967178757:web:83809f20365c636ea29e6c"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);