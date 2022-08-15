import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Navbar(props) {
  //check if value of Provider has user prop
  //if yes user = value.user
  //if not user = undefined
  const { user } = useContext(UserContext);
  console.log('render navbar');
  return (
    <div className='component'>
      <h1>Navbar</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          gap: '1rem',
        }}>
        <span
          style={{
            border: '1px solid black',
            borderRadius: '50%',
            height: '2rem',
            width: '2rem',
            backgroundColor: 'black',
            display: 'inline-block',
          }}></span>
        {user.email}
      </div>
    </div>
  );
}
