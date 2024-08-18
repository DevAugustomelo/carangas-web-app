import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

import CarouselSm from "../carousel/CarouselSm";
import "./card.css";

const Card = ({ marca, modelo, ano, cidade }) => {
  return (
    <div className="crd-container">
      <div className="crd-top">
        <CarouselSm />
      </div>
      <div className="crd-bottom">
        <div className="crd-carInfo">
          <h1>{marca}</h1>
          <h2>{modelo}</h2>
          <span>{ano}</span>
        </div>
        <div className="crd-price">
          <h1>R$ 10.000</h1>
        </div>
        <div className="crd-location">
          <FaMapMarkedAlt />
          <span>{cidade}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
