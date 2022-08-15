import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Header(props) {
  const { user } = useContext(UserContext);
  console.log('render header');
  return (
    <div className='component'>
      <h1>Header</h1>
      <h2>Hello, {user.name}!</h2>
    </div>
  );
}
