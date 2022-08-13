import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/">Inicio</NavLink>
      <span>|</span>
      <NavLink to="/aboutme">Sobre mí</NavLink>
      <span>|</span>
      {/* <NavLink to="/contacto">Contacto</NavLink> */}
      {/* <span>|</span> */}
    </div>
  );
}
