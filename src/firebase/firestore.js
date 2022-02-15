/* eslint-disable max-len */
import {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from './firebase-config.js';

export const publishPost = (text) => {
  addDoc(collection(db, 'posts'), { text });
};

export const getPosts = () => getDocs(query(collection(db, 'posts')));

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);
