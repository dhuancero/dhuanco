import React from "react";

import "../stylesheets/aboutme.css";
import Nofoto from "../img/nofoto_perfil.jpg";

export default function AboutMe() {
  return (
    <div className="contenido">
      <div className="cabecera">
        <div className="titulo">
          <h2>Desarrollador Web</h2>
          <h3>Desarrollador web en recostrucción</h3>
        </div>
        <div className="imgAbout">
          <img src={Nofoto} alt="No foto perfil" />
        </div>
      </div>

      <div className="contentAbout">
        Hola! Soy David Huanco Acero. Desarrollador Web
      </div>
    </div>
  );
}
