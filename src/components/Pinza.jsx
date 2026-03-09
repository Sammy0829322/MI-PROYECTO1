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

      {/* Servo 4 - Extensión */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 4 - Extensión</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Contraer" 
            message={{ tipo:"servo4", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Extender" 
            message={{ tipo:"servo4", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>

      {/* Servo 5 - Giro */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 5 - Giro</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Anti-Horario" 
            message={{ tipo:"servo5", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Horario" 
            message={{ tipo:"servo5", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>

      {/* Servo 6 - Elevación */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 6 - Elevación</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Bajar" 
            message={{ tipo:"servo6", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Levantar" 
            message={{ tipo:"servo6", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>

      {/* Servo 7 - Base */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 7 - Base</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Izquierda" 
            message={{ tipo:"servo7", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Derecha" 
            message={{ tipo:"servo7", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>

      {/* Servo 8 - Muñeca */}
      <div style={{ marginBottom: 30 }}>
        <h3>Servo 8 - Muñeca</h3>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <BotonServo 
            label="Flexión" 
            message={{ tipo:"servo8", accion:"bajar" }} 
            send={send} 
          />
          <BotonServo 
            label="Extensión" 
            message={{ tipo:"servo8", accion:"subir" }} 
            send={send} 
          />
        </div>
      </div>

    </div>
  );
}
