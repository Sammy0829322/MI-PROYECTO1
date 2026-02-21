// src/components/Pinza.jsx
import SliderServo from "./SliderServo";

export default function Pinza({ send }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Control de la Pinza</h2>

      <SliderServo
        id="servo"
        label="Servo 1 - Apertura"
        send={send}
      />

      <SliderServo
        id="servo2"
        label="Servo 2 - Rotación"
        send={send}
      />

      <SliderServo
        id="servo3"
        label="Servo 3 - Inclinación"
        send={send}
      />
    </div>
  );
}
