import React from 'react';
import './BotonServo.css';

export default function BotonServo({ label, message, send }) {
  // Determinar el mensaje de paro según el tipo de servo
  const mensajeParo = { tipo: message.tipo, accion: "stop" };

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
