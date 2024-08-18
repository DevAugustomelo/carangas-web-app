import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Catalogo from "../../components/catalogo/Catalogo";

import "./catalogo.css";

import { BiSearch } from "react-icons/bi";
import { carInfo } from "../../data/car";
import Card from "../../components/card/Card";

export default function CatalogoPage() {
  return (
    <>
      <Navbar />
      <div className="catP-container">
        <div className="catP-content">
          <div className="cat-banner">
            <h1>Catálogo</h1>
            <h2>
              Os Carangos mais amados do Brasil e do mundo.
              <br />
              Em um só lugar!
            </h2>

            <div className="cat-search">
              <input
                type="text"
                id="search"
                placeholder="Procure seu carango aqui."
              />
              <BiSearch />
            </div>
          </div>
          <div className="cat-main">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
