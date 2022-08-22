import axios from 'axios';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { db } from '../../firebase-config';

const postsCollectionRef = collection(db, 'posts');

const postsService = {
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  },
  getFromFirebase: async () => {
    const response = await getDocs(postsCollectionRef);
    return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  },
  post: async (post) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
    return response.data;
  },
  postToFirebase: async (post) => {
    const response = await addDoc(postsCollectionRef, post);
    return { ...post, id: response.id };
  },
  delete: async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (response.status === 200) {
      // status OK
      return id;
    }
  },
  deleteFromFirebase: async (id) => {
    const docRef = doc(db, 'posts', id);
    await deleteDoc(docRef);
    return id;
  },
  update: async (post) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    console.log('data', response);
    return post;
  },
  updateInFirebase: async (post) => {
    const docRef = doc(db, 'posts', post.id);
    await updateDoc(docRef, { title: post.title, body: post.body });
    return post;
  },
};

export default postsService;
