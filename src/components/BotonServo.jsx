import React from 'react';
import './BotonServo.css';

export default function BotonServo({ label, message, send }) {
  const mensajeParo = { tipo: "servo", accion: "stop" };

  return (
    <button
      className="boton-servo"
      onMouseDown={() => send(message)}      
      onMouseUp={() => send(mensajeParo)}    
      onTouchStart={() => send(message)}     
      onTouchEnd={() => send(mensajeParo)}   
    >
      {label}
    </button>
  );
}
