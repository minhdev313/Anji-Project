// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "anji-project-f4297.firebaseapp.com",
  projectId: "anji-project-f4297",
  storageBucket: "anji-project-f4297.appspot.com",
  messagingSenderId: "75669669286",
  appId: "1:75669669286:web:c337fa2d02d3701599bb67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);