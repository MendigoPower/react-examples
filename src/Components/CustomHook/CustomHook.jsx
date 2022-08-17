import React from 'react';
import useAxios from './hooks/useAxios';

export default function CustomHook() {
  //https://the-trivia-api.com/api/questions
  //https://jsonplaceholder.typicode.com/
  // const { data } = useAxios(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   'post',
  //   { title: 'Test title', body: 'Test body' }
  // );
  const { data } = useAxios('https://jsonplaceholder.typicode.com/posts');
  console.log('data', data);
  return (
    <div>
      <h1>Custom Hook</h1>
    </div>
  );
}
