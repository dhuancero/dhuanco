import React from "react";
import { Routes, Route } from "react-router-dom";

import "../stylesheets/Main.css";

import AboutMe from "../pages/AboutMe";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";

export default function Main() {
  return (
    <main className="contentMain">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </main>
  );
}
