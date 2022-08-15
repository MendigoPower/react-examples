import React from 'react';
import Header from './Header';
import UserForm from './UserForm';

export default function Main(props) {
  console.log('render main');
  return (
    <div className='component'>
      <h1>Main</h1>
      <Header />
      <UserForm />
    </div>
  );
}
