import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

export default function Class() {
  return (
    <div
      className='component'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '100%',
      }}>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}
