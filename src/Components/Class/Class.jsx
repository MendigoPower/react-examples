import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import { ProfileProvider } from './ProfileContext';

export default function Class() {
  return (
    <div
      className='component'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '100%',
      }}>
      <ProfileProvider>
        <FunctionalComponent />
        <ClassComponent />
      </ProfileProvider>
    </div>
  );
}
