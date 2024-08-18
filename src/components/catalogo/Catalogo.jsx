import React from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { carInfo } from "../../data/car";
import "./catalogo.css";

function Catalogo() {
  return (
    <div className="cat-container">
      <div className="cat-content">
        {carInfo.length > 0 ? (
          carInfo
            .slice(0, 12)
            .map((item, index) => (
              <Card
                item={item}
                marca={item.marca}
                modelo={item.modelo}
                ano={item.ano}
                cidade={item.cidade}
              />
            ))
        ) : (
          <p>Carregando Catálogo....</p>
        )}

        <button>
          <Link to="/catalogo">Ver Catálogo completo</Link>
        </button>
      </div>
    </div>
  );
}

export default Catalogo;
