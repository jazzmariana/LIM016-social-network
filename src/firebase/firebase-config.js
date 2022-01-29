/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDDztJa9Pbpsg9DXTTc9-v5UPPyawuY-vg',
  authDomain: 'movielover-fae35.firebaseapp.com',
  projectId: 'movielover-fae35',
  storageBucket: 'movielover-fae35.appspot.com',
  messagingSenderId: '758036105206',
  appId: '1:758036105206:web:5414306fcc69ddd100a9d7',
  measurementId: 'G-J12R0Q3XFJ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();

export {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  initializeApp,
  getAnalytics,
  getAuth,
};
