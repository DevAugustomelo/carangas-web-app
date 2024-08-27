import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { useParams } from "react-router";
import "./car.css";
import { carInfo } from "../../data/car";

const Car = () => {

  const { id } = useParams();
  const selectedCar = () => {
    return carInfo.filter((car) => car.id === parseInt(id));
  }

  const carr = selectedCar();
  return (
    <>
      <Navbar />
      {carr && (
        <>
          <div className="car-container">
            <div className="car-content">
              <div className="car-info">
                <h1>{carr[0].marca}</h1>
                <h2>{carr[0].modelo}</h2>
                <div className="car-detail">
                  <div className="car-item">
                    <h3>Cidade</h3>
                    <span>{carr[0].cidade}</span>
                  </div>
                  <div className="car-item">
                    <h3>Cidade</h3>
                    <span>{carr[0].cidade}</span>
                  </div>
                  <div className="car-item">
                    <h3>Ano</h3>
                    <span>{carr[0].ano}</span>
                  </div>
                  <div className="car-item">
                    <h3>Km</h3>
                    <span>{carr[0].valor}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )

      }
      <Footer />
    </>
  );
};

export default Car;
