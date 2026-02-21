import Joystick from "./Joystick";

export default function ControlJoystick({ send }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Control por Joystick</h2>

      <div style={{ display: "flex", gap: 30 }}>
        {/* Joystick vertical */}
        <div>
          <h3>Adelante / Atrás</h3>
          <Joystick mode="vertical" send={send} />
        </div>

        {/* Joystick horizontal */}
        <div>
          <h3>Izquierda / Derecha</h3>
          <Joystick mode="horizontal" send={send} />
        </div>
      </div>
    </div>
  );
}
