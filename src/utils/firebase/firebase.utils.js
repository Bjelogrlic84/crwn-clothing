import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkDxgR9zKVLGW3uZmAlqVY2Butw7Qvcis",
  authDomain: "crwn-clothing-db-6dd92.firebaseapp.com",
  projectId: "crwn-clothing-db-6dd92",
  storageBucket: "crwn-clothing-db-6dd92.appspot.com",
  messagingSenderId: "346873836317",
  appId: "1:346873836317:web:8f7932c133a1d50cc827f4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
};
