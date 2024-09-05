import React, { useState } from "react";
import { FaMapMarkedAlt, FaTools } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";

import CarouselSm from "../carousel/CarouselSm";
import "./card.css";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api/carangasApi";

const Card = ({ make, model, year, color, id }) => {
  const {_id} = useParams();
  const [car, setCar] = useState([]);

  const deleteCarId = _id => {
    api.delete(`cars/${id}`)
    .then(res => alert(res.data))
    setCar(car.filter(item => item._id !== _id))

  }




  const images = [
    {
      id: 1,
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15494716819.jpg?s=fill&w=1920&h=1440&q=75",
    },
    {
      id: 2,
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem1550402785.jpg?s=fill&w=1920&h=1440&q=75",
    },
    {
      id: 3,
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15504708883.jpg?s=fill&w=1920&h=1440&q=75",
    },
    {
      id: 4,
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15494798765.jpg?s=fill&w=1920&h=1440&q=75",
    },
    {
      id: 5,
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15495203533.jpg?s=fill&w=1920&h=1440&q=75",
    },
    {
      id: 6,
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15495485325.jpg?s=fill&w=1920&h=1440&q=75",
    },
    {
      id: 7,
      url: "https://cdn.pixabay.com/photo/2014/07/08/05/07/fusca-386526_1280.jpg",
    },
    {
      id: 8,
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem1550437429.jpg?s=fill&w=1920&h=1440&q=75",
    },
  ];

  return (
    <div className="crd-container">
      <div className="crd-top">
        <CarouselSm images={images} />
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

          <div className="icons flex gap-1 my-6 items-center">
            <Link to={`/novo-carro`}>
              <span className=" text-teal-950 flex ">
                <CiCirclePlus />
              </span>
            </Link>
            <Link to={`/atualizar/${id}`}>
              <span className=" text-red-950 flex">
                <FaTools />
              </span>
            </Link>
            <Link to={`/`} onClick={() => deleteCarId(car._id)}>
              <span className=" text-red-950 flex ">
                <MdDeleteSweep />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
