import React, { Component } from 'react';
import { MdOutlineRemoveShoppingCart, MdAddShoppingCart } from 'react-icons/md';
import styled from 'styled-components';
import './Button.css';

const variant = {
  add: {
    icon: <MdAddShoppingCart />,
    bgColor: 'hsl(158, 36%, 27%)',
    color: 'white',
  },
  remove: {
    icon: <MdOutlineRemoveShoppingCart />,
    bgColor: 'red',
    color: 'white',
  },
};

const StyledButton = styled.button`
  font-family: Montserrat;
  background-color: ${({ type }) => variant[type].bgColor};
  color: ${({ type }) => variant[type].color};
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  font-weigth: 700;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  height: fit-content;
`;

export default class Button extends Component {
  render() {
    return (
      <StyledButton type={this.props.type} onClick={this.props.onClick}>
        <span>{variant[this.props.type].icon}</span>
        <span>{this.props.label}</span>
      </StyledButton>
    );
  }
}
