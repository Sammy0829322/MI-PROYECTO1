import { useRef, useState } from "react";

export default function Joystick({ mode, send }) {
  const stickRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const radius = 50; // rango permitido

  const handleMove = (clientX, clientY) => {
    const rect = stickRef.current.getBoundingClientRect();
    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);

    let nx = x;
    let ny = y;

    // 🔥 LIMITAR MOVIMIENTO SEGÚN EL TIPO DE JOYSTICK
    if (mode === "vertical") {
      nx = 0;                 // ❌ no permitir movimiento horizontal
      ny = Math.max(-radius, Math.min(radius, y));
    }

    if (mode === "horizontal") {
      ny = 0;                 // ❌ no permitir movimiento vertical
      nx = Math.max(-radius, Math.min(radius, x));
    }

    setPos({ x: nx, y: ny });

    // enviar comandos
    if (mode === "vertical") {
      if (ny < -20) send({ tipo: "motor", comando: "adelante" });
      else if (ny > 20) send({ tipo: "motor", comando: "atras" });
    }

    if (mode === "horizontal") {
      if (nx > 20) send({ tipo: "motor", comando: "derecha" });
      else if (nx < -20) send({ tipo: "motor", comando: "izquierda" });
    }
  };

  const handleEnd = () => {
    setPos({ x: 0, y: 0 });
    send({ tipo: "motor", comando: "paro" });
  };

  return (
    <div
      ref={stickRef}
      style={{
        width: 150,
        height: 150,
        background: "#ddd",
        borderRadius: "50%",
        position: "relative",
        margin: 20,
        touchAction: "none"
      }}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX, e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={(e) =>
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
      onTouchEnd={handleEnd}
    >
      {/* Palo del joystick */}
      <div
        style={{
          width: 60,
          height: 60,
          background: "#666",
          borderRadius: "50%",
          position: "absolute",
          left: 75 + pos.x - 30,
          top: 75 + pos.y - 30
        }}
      ></div>
    </div>
  );
}
