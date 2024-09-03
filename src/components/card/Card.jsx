import React from "react";
import { FaMapMarkedAlt,FaTools } from "react-icons/fa";

import CarouselSm from "../carousel/CarouselSm";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ make, model, year, color, id}) => {

  const images = [
    { id: 1, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15494716819.jpg?s=fill&w=1920&h=1440&q=75" },
    { id: 2, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem1550402785.jpg?s=fill&w=1920&h=1440&q=75" },
    { id: 3, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15504708883.jpg?s=fill&w=1920&h=1440&q=75" },
    { id: 4, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15494798765.jpg?s=fill&w=1920&h=1440&q=75" },
    { id: 5, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15495203533.jpg?s=fill&w=1920&h=1440&q=75" },
    { id: 6, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15495485325.jpg?s=fill&w=1920&h=1440&q=75" },
    { id: 7, url: "https://cdn.pixabay.com/photo/2014/07/08/05/07/fusca-386526_1280.jpg" },
    { id: 8, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem1550437429.jpg?s=fill&w=1920&h=1440&q=75" },
];



  return (
    <div className="crd-container">
      <div className="crd-top">
        <CarouselSm
          images={images} 
        />
      </div>
      <div className="crd-bottom">
        <Link to={`/car/${id}`}>
        <div className="crd-carInfo">
          <h1>{make}</h1>
          <h2>{model}</h2>
          <span className="text-stone-700">{year}</span>
        </div>
        </Link>
        <div className="crd-price">
          <h1>{color}</h1>
        </div>
        <div className="crd-location">
          <FaMapMarkedAlt />
          <span>PAULISTA-PE</span>
          <Link to={`/atualizar/${id}`}>
           <span className=" text-red-950 flex flex-row-reverse"><FaTools /></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
