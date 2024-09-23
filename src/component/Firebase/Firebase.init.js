// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANCPmGIXjTTxNMSMQRQRz4Ruk93hIRt-I",
  authDomain: "github-login-dbe64.firebaseapp.com",
  projectId: "github-login-dbe64",
  storageBucket: "github-login-dbe64.appspot.com",
  messagingSenderId: "238069846494",
  appId: "1:238069846494:web:015f0f5cb9ba3ba86d8d4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;