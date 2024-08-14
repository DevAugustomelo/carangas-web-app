




import React from "react";
import { FaMapMarkedAlt } from 'react-icons/fa';

import CarouselSm from "../carousel/CarouselSm";
import "./card.css"




const Card = ()=> {
    return (
        <div className="crd-container">
            <div className="crd-top">
                <CarouselSm />
            </div>
            <div className="crd-bottom">
                <div className="crd-carInfo">
                    <h1>FUSCA</h1>
                    <h2>Wolkswagen</h2>
                    <span>1989</span>
                </div>
                <div className="crd-price">
                    <h1>R$ 10.000</h1>
                </div>
                <div className="crd-location">
                    <FaMapMarkedAlt />
                    <span>Paulista-PE</span>
                </div>
            </div>
        </div>
    )
}


export default Card;