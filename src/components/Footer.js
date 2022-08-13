import React from "react";
import "../stylesheets/Footer.css";

export default function Footer() {
  const year = new Date();
  const yearNow = year.getFullYear();
  return (
    <div className="piePagina">
      <hr />
      <div className="seccion-1">
        <p> By David Huanco Acero</p>
        <p>&copy; {yearNow} - Todos los derechos reservados</p>
      </div>
    </div>
  );
}
