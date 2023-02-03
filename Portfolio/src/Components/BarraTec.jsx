import React from 'react'
import js from './Images/js.png'
import css from './Images/css.png'
import react from './Images/react.png'
import html from './Images/html-5.png'
import postgre from './Images/postgre.png'
import php from './Images/php.png'
import node from './Images/nodejs.png'
import mysql from './Images/mysql.png'
import figma from './Images/figma.png'
import s from './Styles/BarraTec.module.css'

export default function  BarraTec  () {
  return (
    <div className={s.container}>
    
    <nav className="navbar">
    {/* <div className={s.contenedor}> */}
    
   <img  className={s.imagen} src= {react} alt='not found'/>
    <img className={s.imagen} src= {js} alt='not found'/>
    <img className={s.imagen} src= {css} alt='not found'/>
    <img className={s.imagen} src= {html} alt='not found'/>
    <img className={s.imagen} src= {figma} alt='not found'/>
    <img className={s.imagen} src= {node} alt='not found'/>
    <img className={s.imagen} src= {php} alt='not found'/>
    <img className={s.imagen} src= {postgre} alt='not found'/>
    <img className={s.imagen} src= {mysql} alt='not found'/>

    </nav>
    </div>
  )
}
