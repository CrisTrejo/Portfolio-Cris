import React from 'react'
import Card from './Card'
import Navbar from './NavBar'
import styles from './Styles/Projects.module.css'
import card1 from './Images/card1.png'
import card2 from './Images/card2.png'

export default function  Projects  ()  {
  return (
    <div>
     <Navbar></Navbar>
     <div className={styles.cardContainer}>
      <Card 
      title="DogApp"
      image={card1} 
      descripcion="holiiii"
    
      />
      <Card 
      title="Freevents"
      image={card2} 
      descripcion="holiiii"
       />
      <Card 
      title="Bresh"
      descripcion="holiiii"
       />
    </div>
    </div>
  )
}
