import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChildFunction from './ChildFunction';

export default function FunctionalComponent() {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');

  // useEffect(() => {
  //   console.log('run once and never more');
  // }, []);
  // useEffect(() => {
  //   console.log('runs every render');
  // });
  // useEffect(() => {
  //   console.log('runs at first and then only when name updates');
  // }, [name]);
  return (
    <div className='component'>
      <h1>Functional Component</h1>
      <h2>Hello, {name}!</h2>
      <input
        type='text'
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <ChildFunction name={name} setName={setName} />
    </div>
  );
}
