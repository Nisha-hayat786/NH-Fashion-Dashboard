// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwlgB82hdEzHalcMv7f0sI48SBq_zFuQ0",
  authDomain: "nh-fashion.firebaseapp.com",
  projectId: "nh-fashion",
  storageBucket: "nh-fashion.appspot.com",
  messagingSenderId: "961847478436",
  appId: "1:961847478436:web:48a37b8d695be20f8c7e31",
  measurementId: "G-5QFFLH24E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;