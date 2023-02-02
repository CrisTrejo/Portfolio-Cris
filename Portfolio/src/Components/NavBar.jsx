import React from 'react';
import './Styles/NavBar.css'; // Archivo CSS con los estilos de la barra de navegación


// Componente de barra de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/contact" className="active">Contact</a>
      <a href="/projects">Projects</a>
      <a href="#">Experience</a>
      <a href="/tecnologies">Tecnologies</a>
      <a href="/about">About</a>

    </nav>
  );
}

export default Navbar;
