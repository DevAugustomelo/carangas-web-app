import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

import CarouselSm from "../carousel/CarouselSm";
import "./card.css";

const Card = ({ make, model, year, color}) => {
  return (
    <div className="crd-container">
      <div className="crd-top">
        <CarouselSm />
      </div>
      <div className="crd-bottom">
        <div className="crd-carInfo">
          <h1>{make}</h1>
          <h2>{model}</h2>
          <span>{year}</span>
        </div>
        <div className="crd-price">
          <h1>color {color}</h1>
        </div>
        <div className="crd-location">
          <FaMapMarkedAlt />
          <span>PAULISTA-PE</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
