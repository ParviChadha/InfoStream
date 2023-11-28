// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4-2S3K3bTKwe2TZSO91S_MLmbAff4u5E",
  authDomain: "infostream-dti2023.firebaseapp.com",
  projectId: "infostream-dti2023",
  storageBucket: "infostream-dti2023.appspot.com",
  messagingSenderId: "1090629776272",
  appId: "1:1090629776272:web:be642f3bde0b90973c3915",
  measurementId: "G-7Q11QK5CGX"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;

      localStorage.setItem("name", name ?? "Anonymous")
      localStorage.setItem("email", email ?? "")
  }).catch((error) => {
    console.log(error);
  });
};

export {db};
