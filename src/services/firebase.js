import { initializeApp } from "firebase/app";

const firebaseConfig = {
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
};

const app = initializeApp(firebaseConfig);