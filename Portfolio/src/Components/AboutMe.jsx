import React from 'react'
import Navbar from './NavBar'
import s from './Styles/AboutMe.module.css'
import icon from './Images/icon.jpeg'

export default function  AboutMe  ()  {
  return (
    <div>
    <Navbar></Navbar>
    <div className={s.container}>
    <div className={s.contenido}>
    <img src={icon} alt="not found"/>
<div className={s.titulo}>

      <h1>About me</h1>
</div>
      <p>Desarrolladora Full Stack, me apasiona el mundo tecnológico. Especializada en el desarrollo de interfaces de usuario y experiencias de usuario en general. Me gustan las tecnologías frontend y trabajar en estrecha colaboración con diseñadores y otros desarrolladores web para crear sitios y aplicaciones web modernas y atractivas. Soy detallista y espero crear soluciones simples a problemas complejos con creatividad.. Espero formar parte de un equipo de trabajo que me desafíe todos los días y así poder contribuir al crecimiento de su empresa.</p>
    </div>

    </div>
    </div>
  )
}
