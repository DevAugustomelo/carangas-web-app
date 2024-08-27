import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { BiSearch } from "react-icons/bi";
import { carInfo } from "../../data/car";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";

import "./catalogo.css";

const LIMIT = 12;

export default function CatalogoPage() {
  //Search
  const [cards, setCards] = useState(null);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchedCards = (skip, end) => {
      return carInfo.slice(skip, end);
    };
    setCards(searchedCards(skip, skip === 0 ? 1 * LIMIT : skip * LIMIT));
  }, [skip]);

  const searchCar = (searchedText) => {
    const resultCar = carInfo.filter((text) => (
      text.modelo.includes(searchedText)
    ));

    setCards(resultCar.length > LIMIT ? resultCar.slice(0, 12) : resultCar);
  };


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
                onChange={(e) => setSearch(e.target.value)}
              />
              <BiSearch onClick={ () => searchCar(search) } />
            </div>
          </div>
          <div className="cat-main">
            { carInfo.length > 0 ? ( 
              cards &&
                cards.map((item, index) => {
                  const car = JSON.parse(JSON.stringify(item));
                  return <Card
                    key={index}
                    item={car}
                    marca={item.marca}
                    modelo={item.modelo}
                    ano={item.ano}
                    km={item.km}
                    cidade={item.cidade}
                  />
})
             ) : (
              <p>Carregando Catálogo....</p>
            ) }
          </div>
          <div className="cat-pagination">
            <Pagination
              limit={LIMIT}
              total={carInfo.length}
              skip={skip}
              setSkip={setSkip}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
