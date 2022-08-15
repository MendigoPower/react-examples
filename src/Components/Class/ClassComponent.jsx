import React, { Component } from 'react';
import ChildClass from './ChildClass';
import { ProfileContext } from './ProfileContext';

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Arthur',
      name2: '2',
    };
    this.setName = this.setName.bind(this);
  }
  setName(newName) {
    this.setState({ name: newName });
  }
  setName2(newName) {
    this.setState({ name2: newName });
  }

  componentDidMount() {
    console.log('run once and never more');
  }
  //{name:'', name2:''} - prevState
  //{name:'a', name2:''} - state
  componentDidUpdate(gfdsgsdf, prevState) {
    // if (prevState.name !== this.state.name) {
    //   console.log('runs when name changes');
    // }
    console.log('runs every update');
  }
  render() {
    return (
      <div className='component'>
        <h1>Class Component</h1>
        <h2>Hello, {this.state.name}!</h2>
        <p>{this.context.someValue}</p>
        <input
          type='text'
          value={this.state.name2}
          onChange={(e) => this.setName2(e.target.value)}
        />
        <ChildClass name={this.state.name} setName={this.setName} />
      </div>
    );
  }
}
ClassComponent.contextType = ProfileContext;
