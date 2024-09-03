import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { useParams } from "react-router";
import "./car.css";
import api from "../../services/api/carangasApi";

const Car = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  var { id } = useParams();

  const getCarId = () =>
    api.get(`/cars/${id}`)
      .then((response) => [
        setMake(response.make),
        setModel(response.model),
        setYear(response.year),
        setColor(response.color),
      ])
      .catch((error) => console.log(error.message));

  useEffect(() => {
    getCarId();
  }, []);

  {
    console.log("impressão" + make);
  }

  // const selectedCar = () => {
  //   posts.filter((car) => car._id === parseInt(id));
  // }

  // const carr = selectedCar();
  const teste = [];
  return (
    <>
      <Navbar />
      {
        <>
          <div className="car-container">
            <div className="car-content">
              <div className="car-info">
                <h1>{make}</h1>
                {/* <h1>Ford</h1> */}
                <h2>{model}</h2>
                {/* <h2>Mustang</h2> */}
                <div className="car-detail">
                  <div className="car-item">
                    <span>{year}</span>
                    <h3>{color}</h3>
                    <span>1980</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
      <Footer />
    </>
  );
};

export default Car;
