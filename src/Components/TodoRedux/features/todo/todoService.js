import axios from 'axios';
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore';

const todoCollectionRef = collection(db, 'todo');

const todoService = {
  get: async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
  },
  getFromFirebase: async () => {
    const response = await getDocs(todoCollectionRef);
    return response.docs.map((doc) => ({...doc.data(), id: doc.id}));
  }
};

export default todoService;
