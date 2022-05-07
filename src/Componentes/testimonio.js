import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src='https://raw.githubusercontent.com/estefaniacn/testimonios-freecodecamp/master/src/imagenes/testimonio-emma.png'
        />
      
      <div className='contenedor-texto-testimonio'>
         <p className='nombre-testimonio'> Emma Bostian en Suecia</p>
         <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
         <p className='texto-testimonio'>"Siempre he tenido problemas para aprender Javascript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar Javascript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify"</p>
      </div>
        
    </div>  
  );
}

