import axios from 'axios';

const todoService = {
  get: async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todosaaa');
  },
};

export default todoService;
