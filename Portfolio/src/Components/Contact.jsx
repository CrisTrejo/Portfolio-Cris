import React, { useState } from "react";
import s from './Styles/Contact.module.css'
import Navbar from "./NavBar";

export default function  Contact  ()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos del formulario al servidor o mostrar una alerta de éxito
  };

  return (
   <div>
   <Navbar></Navbar>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mensaje:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Enviar" />
      <button onClick={() => window.history.back()}>
      Volver
    </button>
    </form>
    </div>
  );
};

