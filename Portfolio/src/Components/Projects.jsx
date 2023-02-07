import React from 'react'
import Card from './Card'
import Navbar from './NavBar'
import styles from './Styles/Projects.module.css'
import card1 from './Images/card1.png'
import card2 from './Images/card2.png'
import php from './Images/phpAl.png'
import port from './Images/port.png'

export default function  Projects  ()  {
  return (
    <div>
     <Navbar></Navbar>
     <div className={styles.cardContainer}>
      <Card 
      enlace="https://doglibrary.vercel.app/"
      titulo="Dog Library"
      image={card1} 
      descripcion="Proyecto individual desarrollado para bootcamp de Soy Henry. El mismo consiste en una SPA en donde se puede hacer uso de filtros, buscar, ver detalles y crear nuevas razas de perros. Las tecnologías de las que hice uso fueron #HTML, #CSS (puro sin ayuda de librerías), #React, #Redux para el Front end luego Node, Express, Sequelize y PostgreSQL para el Back y por último manejo de REST Api."
    
      />
      <Card 
      enlace="https://freevents.vercel.app/"
      titulo="Freevents"
      image={card2} 
      descripcion="En equipo desarrollamos una SPA que aloja clientes y proveedores para la venta y compra de paquetes para eventos. La misma cuenta con Login para cada tipo de usuario, filtros para paquetes de servicios e integración de Mercado Pago para compras dentro de la aplicación.

Mis responsabilidades como Fontend Developer fueron:
- Creación y lógica de componentes
- Manejo de estados con Redux y Local Storage
- Integración de Auth0
- Búsqueda y solución de bugs en toda la aplicación
- Testear los endpoints de la REST Api con Node para proveedores, clientes, paquetes, etc
- Aplicación de lógica para la creación de ordenes de compra."
       />
      <Card 
      enlace="https://github.com/CrisTrejo/alumnos-aulas"
      titulo="Alumnos"
      image={php} 
      descripcion="Wampserver, uso de php y PhpMyAdmin. Creacion de tablas con posibilidad de alta, modificacion y borrado de datos. Relación entra tablas alumnos y aulas. "
       />
        <Card 
      titulo="Portfolio"
      image={port} 
      descripcion="Portfolio creado utilizando React. Modelo 3d creado con readyplayerme, uso de Canvas y reac.tree. Redux para manejo de estados, css modules"
       />
    </div>
    </div>
    
  )
}
