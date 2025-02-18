import React from "react";

function MenuCategorias({ categorias, categoriasSeleccionadas, setCategoriasSeleccionadas }) {
  const handleChange = (catId) => {
    if (categoriasSeleccionadas.includes(catId)) {
      setCategoriasSeleccionadas(categoriasSeleccionadas.filter((id) => id !== catId));
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, catId]);
    }
  };

  return (
    <div>
      <h3>Categorías</h3>
      {categorias.map((categoria) => (
        <label key={categoria.id}>
          <input
            type="checkbox"
            checked={categoriasSeleccionadas.includes(categoria.id)}
            onChange={() => handleChange(categoria.id)}
          />
          {categoria.nombre}
        </label>
      ))}
    </div>
  );
}

export default MenuCategorias;