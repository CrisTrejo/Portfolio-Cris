import React from 'react'
import s from './Styles/Tecnologies.module.css'
import js from './Images/js.png'
import css from './Images/css.png'
import react from './Images/react.png'
import html from './Images/html-5.png'
import postgre from './Images/postgre.png'
import php from './Images/php.png'
import node from './Images/nodejs.png'
import mysql from './Images/mysql.png'
import figma from './Images/figma.png'
import Navbar from './NavBar'


export default function  Tecnologies  ()  {
  return (
    <div className={s.box}>
    <Navbar></Navbar>
    <h1 className={s.font}>Frontend</h1>
    <div>
    <img src= {react} alt='not found'/>
    <img src= {js} alt='not found'/>
    <img src= {css} alt='not found'/>
    <img src= {html} alt='not found'/>
    <img src= {figma} alt='not found'/>
    </div>
    <h1 className={s.font}>Backend</h1>
    <div>
    <img src= {node} alt='not found'/>
    <img src= {php} alt='not found'/>
    </div>
    <h1 className={s.font}>Database</h1>
    <div>
    <img src= {postgre} alt='not found'/>
    <img src= {mysql} alt='not found'/>
    </div>
    </div>
  )
}
