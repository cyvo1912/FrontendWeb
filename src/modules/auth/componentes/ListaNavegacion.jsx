import React, { useState } from "react";
import "../componentsstilos/ListaNavegacion.css";


const ListaNavegacion = () => {
  const lista_Categorias = ["Hombre", "Mujer", "Niño"];
  const categorias = {
    Hombre: [
      "Pantalones",
      "Jeans",
      "Zapatos",
      "Camisetas",
      "Perfumes",
      "Sudaderas",
      "Trajes",
      "Camisas",
      "Mochilas"
    ],
    Mujer: [
      "Vestidos",
      "Camisas|Blusas",
      "Camisetas",
      "Pantalones",
      "Jeans",
      "Faldas",
      "Zapatos",
      "Bolsos",
      "Perfumes",
      "Sudaderas"
    ],
    Niño: ["Perfume", "Mochilas", "Trajes"]
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoria) => {
    if (selectedCategory === categoria) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoria);
    }
  };

  const handleSubcategoryClick = (subcategoria) => {
    alert(`Has hecho clic en la subcategoría: ${subcategoria}`);
  };

  return (
    <div className="category-container">
      <ul className="category-list">
        {lista_Categorias.map((categoria) => (
          <li key={categoria} className="category-item">
           
            <button
              onClick={() => handleCategoryClick(categoria)}
              className={`category-btn ${
                selectedCategory === categoria ? "active" : ""
              }`}
            >
              {categoria}
            </button>

            {/* Lista de subcategorías */}
            {selectedCategory === categoria && (
              <ul className="subcategory-list">
                {categorias[categoria].map((subcategoria) => (
                  <li key={subcategoria} className="subcategory-item">
                    {/* Botón para cada subcategoría */}
                    <button
                      onClick={() => handleSubcategoryClick(subcategoria)}
                      className="subcategory-btn"
                    >
                      {subcategoria}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNavegacion;