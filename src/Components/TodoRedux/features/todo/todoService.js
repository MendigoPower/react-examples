import axios from 'axios';
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  where,
  query,
} from 'firebase/firestore';

import { db } from '../../../BlogPosts/firebase-config';

const tasksCollectionRef = collection(db, 'tasks');

const todoService = {
  get: async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
  },
  getFromFirebase: async (userId) => {
    console.log('userId', userId);
    if (!userId) return await getDocs(tasksCollectionRef);
    const q = query(tasksCollectionRef, where('userId', '==', userId));
    return await getDocs(q);
  },
  addToFirebase: async (task) => {
    const response = await addDoc(tasksCollectionRef, task);
    return { ...task, id: response.id };
  },
  removeFromFirebase: async (id) => {
    const taskDocumentRef = doc(db, 'tasks', id);
    await deleteDoc(taskDocumentRef);
    return id;
  },
};

export default todoService;
