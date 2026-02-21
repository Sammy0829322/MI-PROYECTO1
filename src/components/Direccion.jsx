import React from 'react';
// Importamos el archivo CSS que acabamos de crear
import './Direccion.css'; 

export default function Direccion({ label, message, send }) {
  const mensajeParo = { tipo: "motor", comando: "paro" };

  return (
    <button
      className="boton-3d" // Usamos la clase aquí
      onMouseDown={() => send(message)}  
      onMouseUp={() => send(mensajeParo)}
      onTouchStart={() => send(message)}
      onTouchEnd={() => send(mensajeParo)}  
    >
      {label}
    </button>
  );
}