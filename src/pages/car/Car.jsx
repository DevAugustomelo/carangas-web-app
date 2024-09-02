import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { useParams } from "react-router";
import "./car.css";
import api from "../../services/api/carangasApi";

const Car = () => {
  const [posts, setPosts] = useState([]);
  
  const { id } = useParams();
  const getCarId = () => (
    
    api.get(`/cars/:${id}`)
    .then(response => setPosts(response.data))
    .catch(error => console.log(error))
    );

  useEffect(() => {
      getCarId()
  }, []);

  {console.log("impressão" + posts);}
  

  const selectedCar = () => {
    return posts.filter((car) => car._id === parseInt(id));
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
                <h1>{carr[0].make}</h1>
                <h2>{carr[0].model}</h2>
                <div className="car-detail">
                  <div className="car-item">
                    <h3>Ano</h3>
                    <span>{carr[0].year}</span>
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
