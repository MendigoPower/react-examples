import React from 'react';

export default function ChildFunction(props) {
  const { name, setName } = props;
  return (
    <div className='component'>
      <h1>Child Function</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
