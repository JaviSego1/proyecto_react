import React, { useState, useEffect } from "react";
import ListaVideojuegos from "./components/ListaVideojuegos";
import MenuCategorias from "./components/MenuCategorias";
import MenuPlataformas from "./components/MenuPlataformas";
import Buscador from "./components/Buscador";
import DetalleVideojuego from "./components/DetalleVideojuego";
import "./App.css";

function App() {
  const [videojuegos, setVideojuegos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [plataformasSeleccionadas, setPlataformasSeleccionadas] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);

  // Obtener datos del backend
  useEffect(() => {
    fetch("http://localhost:3001/videojuegos")
      .then((response) => response.json())
      .then((data) => setVideojuegos(data));

    fetch("http://localhost:3001/categorias")
      .then((response) => response.json())
      .then((data) => setCategorias(data));

    fetch("http://localhost:3001/plataformas")
      .then((response) => response.json())
      .then((data) => setPlataformas(data));
  }, []);

  // Función para eliminar un videojuego del backend y del estado
  const eliminarVideojuego = (id) => {
    // Eliminar del backend
    fetch(`http://localhost:3001/videojuegos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Eliminar del estado local
        setVideojuegos(videojuegos.filter((videojuego) => videojuego.id !== id));
        // Si el videojuego eliminado es el que está seleccionado, lo deseleccionamos
        if (videojuegoSeleccionado?.id === id) {
          setVideojuegoSeleccionado(null);
        }
      })
      .catch((error) => console.error("Error al eliminar el videojuego:", error));
  };

  // Filtrar videojuegos
  const filtrarVideojuegos = () => {
    return videojuegos.filter((videojuego) => {
      const coincideCategoria = categoriasSeleccionadas.length === 0 ||
        videojuego.categorias.some((catId) => categoriasSeleccionadas.includes(catId));
      const coincidePlataforma = plataformasSeleccionadas.length === 0 ||
        videojuego.plataformas.some((platId) => plataformasSeleccionadas.includes(platId));
      const coincideBusqueda = terminoBusqueda === "" ||
        videojuego.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        videojuego.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());
      return coincideCategoria && coincidePlataforma && coincideBusqueda;
    });
  };

  return (
    <div className="App">
      <h1>Catálogo de Videojuegos</h1>
      <MenuCategorias
        categorias={categorias}
        categoriasSeleccionadas={categoriasSeleccionadas}
        setCategoriasSeleccionadas={setCategoriasSeleccionadas}
      />
      <MenuPlataformas
        plataformas={plataformas}
        plataformasSeleccionadas={plataformasSeleccionadas}
        setPlataformasSeleccionadas={setPlataformasSeleccionadas}
      />
      <Buscador terminoBusqueda={terminoBusqueda} setTerminoBusqueda={setTerminoBusqueda} />
      <ListaVideojuegos
        videojuegos={filtrarVideojuegos()}
        setVideojuegoSeleccionado={setVideojuegoSeleccionado}
      />
      {videojuegoSeleccionado && (
        <DetalleVideojuego
          videojuego={videojuegoSeleccionado}
          onClose={() => setVideojuegoSeleccionado(null)}
          onEliminar={eliminarVideojuego} // Pasar la función de eliminar
        />
      )}
    </div>
  );
}

export default App;
