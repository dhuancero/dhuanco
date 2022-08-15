import React from "react";

import "../stylesheets/aboutme.css";
// import Nofoto from "../img/nofoto_perfil.jpg";
import Foto from "../img/foto_perfil.jpeg";

export default function AboutMe() {
  return (
    <div className="contenido">
      <div className="cabecera">
        <div className="imgAbout">
          <img src={Foto} alt="foto de perfil" />
        </div>
        <div className="titulo">
          <h2> 👋 ¡Hola!, soy David Huanco Acero</h2>
          <p>Desarrollador Web | Full Stack</p>
        </div>
      </div>
      <hr />
      <div className="contentAbout">
        {/* <h2>Soy David Huanco Acero.</h2>
        <p>Desarrollador Web | Full Stack</p> */}
        <br />
        <p>
          Soy de Puno, al sur de Perú. Una ciudad pequeña y bonita a las orillas
          del lago Titicaca, el lago navegable más alto del mundo {"("}lo tenía
          que decir 😉{")"}. Aunque llevo desde los 17 años en Valladolid,
          España.
        </p>
        <br />
        <p>
          Durante este tiempo siempre estuve relacionado con las TIC, trabajando
          en una fundación dando clases de alfabetización digital a personas
          mayores. Una experiencia reconfortante.
        </p>
        <br />
        <p>
          Estudié un{" "}
          <strong>CFGS de Sistemas de Telecomunicacinoes e Informáticos</strong>{" "}
          y luego otro{" "}
          <strong>CFGS de Desarrollo de Aplicaciones Informáticas</strong>.
          Aunque por distintos motivos personales no pude trabajar de
          programador.
        </p>
        <br />
        <p>
          Pero heme aquí con 35 años volviendo al mundo de la tecnología.Y, esta
          vez, espero que de forma permanente 😁.
        </p>
        <br />
        <p>
          Me considero una persona positiva, colaboradora, polivalente y
          versatíl, con gran capacidad de adaptación.
        </p>

        <div className="cvDownloader">
          <a
            class="nav-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/uc?export=download&id=1zyrFKuxDCUpTBOj1VM1Fi8OAwWEKjZyp"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}
