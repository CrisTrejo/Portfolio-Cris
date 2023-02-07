import React from 'react'
import s from './Styles/Experiencie.module.css'
import Navbar from './NavBar'

export default function Experiencie  ()  {
  return (
    <>
<Navbar></Navbar>
    <div className={s.experienceGrid}>
    <div className={s.experienceCard}>
      <h3>Bresh</h3>
      <p>Puesto: Frontend developer freelance</p>
      <p>Descripción: Contacto y negociación directa con cliente. Trabajo en conjunto con equipo de marketing, diseñadores y otros desarrolladores Uso de React, moduleCSS, ExpressJS, Redux, Bootstrap, MongoDB</p>
      <p>Fecha: 2022</p>
    </div>
    <div className={s.experienceCard}>
      <h3>Argenstore</h3>
      <p>Puesto: Vendedor</p>
      <p>Descripción: Responsable en ventas mayoristas de insumos médicos.</p>
      <p>Fecha: Enero 2020 - Diciembre 2020</p>
    </div>
    <div className={s.experienceCard}>
      <h3>Conexus</h3>
      <p>Puesto: Responsable de facturación</p>
      <p>Descripción: Encargada de realizar facturas A, B y notas de crédito en la Afip y/o impresora fiscal, luego cargarlas en el sistema Finnegans. Controlar mediante excel el stock de mercaderia y el cierre por mes el balance entre las facturas. Dar de alta y baja clientes en plataforma de un curso.</p>
      <p>Fecha: 2016 -  2018</p>
    </div>
    <div className={s.experienceCard}>
      <h3>Conexus</h3>
      <p>Puesto: Cadete</p>
      <p>Descripción:Encargada de archivar documentos, realizar trámites de distintos tipos, verificar que se encuentren al día todos los documentos de los empleados de un sector de la empresa y también era parte del equipo de selección de personal para entrevistas grupales. Llevar documentación para pagar a sus lugares correspondientes o a clientes. Encargada de manipular las redes sociales de la empresa con el objetivo de crearle una imagen comercial a un determinado producto que ellos seleccionaron.</p>
      <p>Fecha:  2015 - 2016</p>
    </div>
  </div>
  </>
  )
}
