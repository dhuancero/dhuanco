import React from "react";

import "../stylesheets/ListaPortafolio.css";

import Portafolio from "./Portafolio";

export default function Listaportafolio(props) {
  const verPortafolio = props.proyectos.map((datos) => {
    return (
      <li key={datos.id}>
        <Portafolio page={datos} />
      </li>
    );
  });
  return <ul className="verPortafolio">{verPortafolio}</ul>;
}
