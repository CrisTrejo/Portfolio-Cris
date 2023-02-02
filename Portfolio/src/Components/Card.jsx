import React from 'react';
import s from './Styles/Card.module.css';
import card1 from './Images/card1.png'


function Card({title, image, descripcion}) {
  return (
    <div>
    <img className={s.img} src={image} alt="not found"/>
      {/* <div className={styles.cardHeader}>
        <img src={chip} alt="card-image"/>
      </div>
      <div className={styles.cardBody}>
        <h2>{title}</h2>
        <p>{descripcion}</p>
      </div> */}
      <h2>{title}</h2>
        <p>{descripcion}</p>
    </div>
  );
}

export default Card;

