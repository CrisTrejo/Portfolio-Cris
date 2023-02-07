import React from 'react';
import s from './Styles/Card.module.css';
import card1 from './Images/card1.png'


function Card({ image, descripcion, enlace, titulo}) {
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
      <a className={s.a} href={enlace}><h1>{titulo}</h1></a>
        <p className={s.p}>{descripcion}</p>
    </div>
  );
}

export default Card;

