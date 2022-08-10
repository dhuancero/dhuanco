import React from "react";
import "../stylesheets/Portafolio.css";

export default function Portafolio({ page }) {
  const pagina = page.lenguajes.map((lenguaje, index) => {
    return (
      <li key={index}>
        <h4>{lenguaje}</h4>
      </li>
    );
  });
  return (
    <section>
      <a
        href={page.url}
        target="_blank"
        className="pagina"
        key={page.id}
        rel="noopener noreferrer"
      >
        <img src={page.image} alt={page.name} />
        <h2>{page.name}</h2>
        <h4>Tecnologías:</h4>
        <ul className="tecnologia">{pagina}</ul>
      </a>
    </section>
  );
}
