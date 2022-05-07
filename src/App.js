import React from "react";
import "../app.css";
import {Testimonio} from './Componentes/testimonio.js'

export default function App() {
  return (
    <div className='app'>
      <div className='contenedor-principal'>
          <h1>Esto es lo que nuestros alumnos opinan sobre nosotros</h1>
          <Testimonio />
      </div>
    </div>
  );
}
