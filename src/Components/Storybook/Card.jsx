import React from 'react';
import Button from './Button';
export default function Card(props) {
  const { item } = props;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '450px',
        height: '400px',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: 'auto',
        alignItems: 'center',
        rowGap: '1rem',
        columnGap: '1rem',
        padding: '1rem',
      }}>
      <img
        style={{
          width: '90%',
          borderRadius: '10px 0 0 10px',
          objectFit: 'contain',
        }}
        src={item.image}
        alt=''
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
        <h2>{item.title.substring(0, 100)}</h2>
        <p>{item.description.substring(0, 100)}</p>
        <h2>${item.price.toFixed(2)}</h2>
        <Button />
      </div>
    </div>
  );
}
