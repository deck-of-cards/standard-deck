// BackComponent.jsx
import React from 'react';
import backImagePath from './assets/graphics/bg.png';
import styles from './assets/css/styles.css';

export const Back = () => {

  const backStyle = {
    backgroundImage: `url(${backImagePath})`,
  };

  return (
    <div className={`${styles.card}`}>
      <div className={styles['card-back']} style={backStyle}></div>
    </div>
  )
}
