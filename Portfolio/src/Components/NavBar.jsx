import React from 'react';
import './Styles/NavBar.css'; // Archivo CSS con los estilos de la barra de navegación
import icon from './Images/icon.jpeg'


// Componente de barra de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
    <a href="/"><img style={{width:'4vw', height:'6vh' }} src={icon} alt="not found"/></a>
      
      <a href="/contact" className="active">Contact</a>
      <a href="/projects">Projects</a>
      <a href="#">Experience</a>
      <a href="/tecnologies">Tecnologies</a>
      <a href="/about">About</a>

    </nav>
  );
}

export default Navbar;
