import { useState } from "react";
import "./Menu.css";

export default function Menu({ active, setActive }) {
  // Estado para controlar si el menú está abierto (true) o cerrado (false)
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    { id: "control", label: "Control" },
    { id: "pinza", label: "Pinza" },
    { id: "joystick", label: "Joystick" },
  ];

  // Función para manejar el click en una opción
  const handleOptionClick = (id) => {
    setActive(id);     // Cambia el panel activo
    setIsOpen(false);  // Cierra el menú automáticamente
  };

  return (
    <div className="menu-container">
      
      {/* BOTÓN PRINCIPAL (Hamburguesa) */}
      <button 
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕ CERRAR" : "☰ MENÚ"}
      </button>

      {/* LISTA DESPLEGABLE (Solo se muestra si isOpen es true) */}
      {isOpen && (
        <div className="menu-dropdown">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleOptionClick(btn.id)}
              className={`menu-item ${active === btn.id ? "active" : ""}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}