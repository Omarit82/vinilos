import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD0g-R8idLyPasi_3b4pmnXFWQQ71mKdY8",
    authDomain: "vinilos-58bfb.firebaseapp.com",
    projectId: "vinilos-58bfb",  
    storageBucket: "vinilos-58bfb.appspot.com",  
    messagingSenderId: "350967178757",  
    appId: "1:350967178757:web:83809f20365c636ea29e6c",  
    measurementId: "G-HFX4KCGWEF"  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createRoot(document.getElementById('root')).render(<App />);
