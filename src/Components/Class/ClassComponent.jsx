import React, { Component } from 'react';
import ChildClass from './ChildClass';

export default class ClassComponent extends Component {
  render() {
    return (
      <div className='component'>
        <h1>Class Component</h1>
        <ChildClass />
      </div>
    );
  }
}
