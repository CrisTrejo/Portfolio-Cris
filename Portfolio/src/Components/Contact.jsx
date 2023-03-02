

import React from 'react'
import s from './Styles/Contact.module.css'
 import Navbar from "./NavBar";
export default function Contact  ()  {
  return (
    <div>
    <Navbar></Navbar>
    <div className={s.container}>
    <div className={s.contenido}>
    <div className={s.titulo}>
      <h1>CONTACTO</h1>
      </div>
      <p>Mail: cristrejolavalle@gmail.com</p>
      <p>Mail secundario: cristlv999@gmail.com</p>
      <p>Linkedin: cristrejolavall</p>
      <p>Github: cristrejo</p>
      <p>Telefono: +5491134285013</p>
      </div>
      </div>
    </div>
  )
}

