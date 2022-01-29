/* eslint-disable max-len */
import {
  auth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from './firebase-config.js';

/* ---------SIGNUP--------- */
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

/* ---------LOGIN--------- */
export const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

/** ---------SIGN OUT--------- */
export const logout = () => signOut(auth);

/** ---------CAMBIO DE SESION--------- */
export const stateChanged = (callback) => onAuthStateChanged(auth, callback);

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// export {createUser}
