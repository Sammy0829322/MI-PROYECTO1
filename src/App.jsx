import { useState } from "react";
import Login from "./Login";
import { useWebSocket } from "./hooks/useWebSocket";
import Menu from "./components/Menu";
import Direccion from "./components/Direccion";
import Pinza from "./components/Pinza";
import ControlJoystick from "./components/ControlJoystick";

import "./App.css";

export default function App() {
  const [session, setSession] = useState(null);
  const [activePanel, setActivePanel] = useState("control");

  const { send } = useWebSocket(
    session ? `ws://${session.ip}/ws` : null
  );

  if (!session) {
    return <Login onLogin={(data) => setSession(data)} />;
  }

  return (
    <div className="app-container">

      <Menu active={activePanel} setActive={setActivePanel} />

      {activePanel === "control" && (
        <div className="panel">

          {/* Área de juego: Contenedor flexible que alinea los paneles */}
          <div className="area-de-juego">
            
            {/* --- PANEL 1: CONTROL DE DIRECCIÓN (CRUZ) --- */}
            <div className="control-pad">
              <h1 className="panel-title">Control Botones</h1>
              {/* Nota: El orden visual lo controla el CSS Grid */}
              <Direccion label="▲" message={{ tipo:"motor", comando:"adelante" }} send={send} />
              <Direccion label="▼" message={{ tipo:"motor", comando:"atras" }} send={send} />
              <Direccion label="◄" message={{ tipo:"motor", comando:"izquierda" }} send={send} />
              <Direccion label="►" message={{ tipo:"motor", comando:"derecha" }} send={send} />
            </div>

            {/* --- PANEL 2: CONTROL DE LUCES (NUEVO) --- */}
            <div className="luces-panel">
              <h2 className="luces-title">Iluminación</h2>
              
              <div className="grid-luces">
                {/* Botón 1 */}
                <button className="btn-interruptor" onClick={() => send({ tipo: "luz", id: 1, estado: "toggle" })}>
                  LUZ 1
                </button>
                
                {/* Botón 2 */}
                <button className="btn-interruptor" onClick={() => send({ tipo: "luz", id: 2, estado: "toggle" })}>
                  LUZ 2
                </button>
                
                {/* Botón 3 */}
                <button className="btn-interruptor" onClick={() => send({ tipo: "luz", id: 3, estado: "toggle" })}>
                  LUZ 3
                </button>
                
                {/* Botón 4 */}
                <button className="btn-interruptor" onClick={() => send({ tipo: "luz", id: 4, estado: "toggle" })}>
                  LUZ 4
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {activePanel === "pinza" && (
        <div className="panel">
          <Pinza send={send} />
        </div>
      )}

      {activePanel === "joystick" && (
        <div className="panel">
          <ControlJoystick send={send} />
        </div>
      )}
      
    </div>
  );
}