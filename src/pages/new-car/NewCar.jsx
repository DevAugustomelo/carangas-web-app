import React, { useState } from "react";
import api from "../../services/api/carangasApi";
import Navbar from "../../components/navbar/Navbar"

const NewCar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const changeOnClick = (event) => {
    event.preventDefault();

    const cars = {
      make,
      model,
      year,
      color,
    };

    api
      .post("/cars/add", cars)
      .then((res) => alert(res.data))
      .catch((error) => console.log(error.message));

    setMake("");
    setModel("");
    setYear("");
    setColor("");
  };

  return (
    <>
    <Navbar className="m-0"/>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full relative">
        <img
          className="w-full h-96 object-cover"
          src="assets/images/shelby.png"
          alt="banner-car-image"
        />
      </div>
      <div className="ctc-form">
        <h1 className="flex justify-center items-center text-4xl font-semibold m-3">Oba! Carango chegando no catálogo</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <input
            required={true}
            type="text"
            id="make"
            name="make"
            value={make}
            placeholder="Digite o fabricante"
            onChange={(e) => setMake(e.target.value)}
          />
          <input
            required={true}
            type="text"
            id="model"
            name="model"
            value={model}
            placeholder="Informe o modelo"
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            required={true}
            type="text"
            id="year"
            name="year"
            value={year}
            placeholder="Informe o ano de fabricação"
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            required={true}
            type="text"
            id="color"
            name="color"
            value={color}
            placeholder="Informe a cor"
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            type="submit"
            className="hover:bg-neutral-800 active:bg-neutral-900 focus:ring focus:ring-yellow-500"
          >
            Enviar Cadastro
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default NewCar;
