import React from "react";
import { NavLink } from "react-router-dom";

import "../stylesheets/Header.css";

export default function Header() {
  return (
    <header className="headerContent">
      <div className="headerTitle">
        <h1>DAVID HUANCO ACERO</h1>
        <h2>Desarrollador Web</h2>
      </div>
      <nav className="headerNav">
        <div className="navContent">
          <NavLink to="/">Inicio</NavLink>
          <span>|</span>
          <NavLink to="/aboutme">Sobre mí</NavLink>
          <span>|</span>
          {/* <NavLink to="/contacto">Contacto</NavLink> */}
          {/* <span>|</span> */}
        </div>
        <div className="rrssContent">
          <a
            href="mailto:d.huancero@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a
            href="https://es.linkedin.com/in/dhuanco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/dhuancero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}
