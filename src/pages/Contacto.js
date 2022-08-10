import { React, useState } from "react";

import "../stylesheets/Contacto.css";

export default function Contacto() {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    asunto: "",
    descripcion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos.nombre);
    console.log(datos.asunto);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setDatos({
      ...datos,
      [name]: value,
    });
  };
  return (
    <div className="contactContent">
      <form onClick={handleSubmit} method="post" className="formContent">
        <label htmlFor="">
          Nombre:
          <input
            type="text"
            name="nombre"
            id="name"
            // value={datos.nombre}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Email:
          <input
            type="email"
            name="email"
            id="mail"
            // value={datos.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Asunto:
          <input
            type="text"
            name="asunto"
            id="asunto"
            // value={datos.asunto}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Descripción:
          <textarea
            name="descripcion"
            id="descripcion"
            cols="30"
            rows="10"
            // value={datos.descripcion}
            onChange={handleChange}
          ></textarea>
        </label>
        <div className="botones">
          <input type="submit" value="ENVIAR" name="btnEnviar" />
        </div>
      </form>
    </div>
  );
}
