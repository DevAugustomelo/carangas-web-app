import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { useParams } from "react-router";
import "./car.css";
import getPosts from "../../services/utils/funtions";

const Car = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(posts, setPosts);
  }, []);


  const { id } = useParams();
  const selectedCar = () => {
    return posts.filter((car) => car._id === parseInt(id));
  }

  const carr = selectedCar();
  console.log(carr);
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
