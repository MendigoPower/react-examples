import React from 'react';
import Grandchild from './Grandchild';

export default function Child() {
  return (
    <div className='component'>
      <h1>Child</h1>
      <Grandchild />
    </div>
  );
}
