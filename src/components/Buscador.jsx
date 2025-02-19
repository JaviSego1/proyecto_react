import React from "react";

function Buscador({ terminoBusqueda, setTerminoBusqueda }) {
  return (
    <div>
      <input
        type="text"
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
      />
    </div>
  );
}

export default Buscador;