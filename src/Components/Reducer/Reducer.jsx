import React from 'react';
import Child from './Child';
import { CounterProvider } from './CounterContext';
import Sibling from './Sibling';

export default function Reducer() {
  return (
    <div className='component' style={{ display: 'flex', width: '100%' }}>
      <h1>Reducer</h1>
      <CounterProvider>
        <Child />
        <Sibling />
      </CounterProvider>
    </div>
  );
}
