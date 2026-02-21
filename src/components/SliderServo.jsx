// src/components/SliderServo.jsx
import { useState } from "react";

export default function SliderServo({ id, label, send }) {
  const [angulo, setAngulo] = useState(90);

  const handleChange = (e) => {
    const valor = Number(e.target.value);
    setAngulo(valor);

    send({
      tipo: id,       // "servo1", "servo2", etc.
      angulo: valor
    });
  };

  return (
    <div style={{ marginBottom: 25 }}>
      <h3>{label}</h3>

      <input
        type="range"
        min="0"
        max="180"
        value={angulo}
        onChange={handleChange}
        style={{ width: "300px" }}
      />

      <p>Ángulo: {angulo}°</p>
    </div>
  );
}
