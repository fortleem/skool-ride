import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from 'firebase/auth';

// 🔐 Replace with your Firebase config from https://console.firebase.google.com/project/skool-ride/settings/general
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "skool-ride.firebaseapp.com",
  projectId: "skool-ride",
  storageBucket: "skool-ride.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const createRecaptcha = (containerId: string) =>
  new RecaptchaVerifier(auth, containerId, { size: 'invisible' });

export const signInWithPhone = (phone: string, verifier: any) =>
  signInWithPhoneNumber(auth, phone, verifier);

export const signInWithGoogle = () =>
  signInWithPopup(auth, new GoogleAuthProvider());
