// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA03DcwilaXw7il8CltHAyHJPxuvFBdNso",
  authDomain: "easter-egg-ephec.firebaseapp.com",
  projectId: "easter-egg-ephec",
  storageBucket: "easter-egg-ephec.firebasestorage.app",
  messagingSenderId: "600758213032",
  appId: "1:600758213032:web:b4188a883f5a0313f4e59d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
