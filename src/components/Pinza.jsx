// src/components/Pinza.jsx
import BotonServo from "./BotonServo";

export default function Pinza({ send }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Control de la Pinza</h2>

      {/* Servo 1 - Apertura */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 1 - Apertura</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Cerrar" 
            message={{ tipo:"servo", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Abrir" 
            message={{ tipo:"servo", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>

      {/* Servo 2 - Rotación */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 2 - Rotación</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Izquierda" 
            message={{ tipo:"servo2", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Derecha" 
            message={{ tipo:"servo2", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>

      {/* Servo 3 - Inclinación */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 3 - Inclinación</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Bajar" 
            message={{ tipo:"servo3", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Subir" 
            message={{ tipo:"servo3", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>
    </div>
  );
}
