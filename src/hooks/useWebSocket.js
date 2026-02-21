// src/hooks/useWebSocket.js
import { useEffect, useRef } from "react";

export function useWebSocket(url) {
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log("WebSocket conectado");
    };

    ws.current.onmessage = (msg) => {
      console.log("Mensaje recibido:", msg.data);
    };

    ws.current.onerror = (e) => {
      console.error("Error WebSocket:", e);
    };

    return () => ws.current && ws.current.close();
  }, [url]);

  const send = (obj) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(obj));
    } else {
      console.log("WebSocket no está listo");
    }
  };

  return { send };
}
