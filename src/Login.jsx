import { useState } from "react";
import "./login.css";

export default function Login({ onLogin }) {
  const [ip, setIp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ip.trim()) {
      alert("Ingresa una dirección IP válida");
      return;
    }

    onLogin({ ip });
  };

  return (
    <div className="login-container">

      {/* VIDEO SOLO PARA LOGIN */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/fondo.mp4" type="video/mp4" />
      </video>

      {/* LADO IZQUIERDO */}
      <div className="left-panel">
        <h1>Bienvenido<br />a OASIS</h1>
        <p>
          Operacion de asistencia y seguimiento para la identificacion de sobrevivientes<br />
          inicia la conexión al servidor 
        </p>
      </div>

      {/* FORMULARIO */}
      <div className="right-panel">
        <form onSubmit={handleSubmit} className="login-box">
          <h2>Iniciar sesión</h2>

          <h3>Dirección IP</h3>
          <input
            type="text"
            placeholder="Ej: 192.168.3.8"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />

          <button type="submit" className="btn-login">Entrar</button>
        </form>
      </div>
    </div>
  );
}
