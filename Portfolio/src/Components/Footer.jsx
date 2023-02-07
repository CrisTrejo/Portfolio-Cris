import React from 'react'
import github from './Images/github.png'
import linkedin from './Images/linkedin.png'
import email from './Images/email.png'

import s from './Styles/Footer.module.css'

export default function  BarraTec  () {
  return (
    <div className={s.container}>
    
    <nav className={s.navbar}>
    {/* <div className={s.contenedor}> */}
    
   <div className={s.contenido}>
   <a href="https://github.com/CrisTrejo" title="github iconos"><img src= {github} alt='not found'/>github.com/CrisTrejo</a>
   <a href="https://www.linkedin.com/in/cristinatrejolavalle" title="github iconos"><img src= {linkedin} alt='not found'/>linkedin.com/in/cristinatrejolavalle</a>
   <a href="https://github.com/CrisTrejo" title="github iconos"><img src= {email} alt='not found'/>cristrejolavalle@gmail.com</a>
   </div>
    </nav>
    </div>
  )
}