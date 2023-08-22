import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQQCD-Ytx25opefjmOtFBx4uw85mV6CzU",
  authDomain: "chathub-reactapp.firebaseapp.com",
  projectId: "chathub-reactapp",
  storageBucket: "chathub-reactapp.appspot.com",
  messagingSenderId: "586280521708",
  appId: "1:586280521708:web:cacb2ba54ff7aa063a3ac9"
};

export const app = initializeApp(firebaseConfig);