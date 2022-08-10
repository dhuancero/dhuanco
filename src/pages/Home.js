import { React, useState } from "react";

import Listaportafolio from "../components/ListaPortafolio";

import datos from "../data/data.json";

import "../stylesheets/Home.css";

export default function Home() {
  const [portafolio] = useState(datos);
  return (
    <div className="listaPortafolio">
      <Listaportafolio proyectos={portafolio} />
    </div>
  );
}
