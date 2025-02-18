import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // Importa los estilos globales

// Crea un root para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);