import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz4sJeApThnXWdkMFInmrZUtjxIlON_5Q",
  authDomain: "tienda-nexku.firebaseapp.com",
  projectId: "tienda-nexku",
  storageBucket: "tienda-nexku.appspot.com",
  messagingSenderId: "271385506921",
  appId: "1:271385506921:web:f125feefe00ce7a2a75ef8"
};

const app = initializeApp(firebaseConfig); //Firebase
export const db = getFirestore(app); //Firestore