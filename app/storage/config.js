import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeI3lW8VEG5Np2Yho-ByVW8RbsD5vkkCo",

  authDomain: "e-commerce-20aaf.firebaseapp.com",

  projectId: "e-commerce-20aaf",

  storageBucket: "e-commerce-20aaf.appspot.com",

  messagingSenderId: "585862791198",

  appId: "1:585862791198:web:fd1c5525a8bbadb49f2e0f",

  measurementId: "G-LLTMJBNLRT",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
