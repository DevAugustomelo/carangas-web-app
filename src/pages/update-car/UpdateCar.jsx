import React, { useEffect, useState } from "react";
import api from "../../services/api/carangasApi";
import { useParams } from "react-router";



const UpdateCar = () => {
  const { id } = useParams();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [car, setCar] = useState([]);

  const changeOnClick = (event) => {
    event.preventDefault();

    const cars = {
      make,
      model,
      year,
      color,
    };

    api
      .put(`/cars/update/${id}`, cars)
      .then((res) => alert(res.data))
      .catch((error) => console.log(error.message));

    setMake("");
    setModel("");
    setYear("");
    setColor("");
  };

  useEffect(() => {
    api.get(`/cars/${id}`)
      .then((response) => [
        setCar(response.data),
        setMake(response.data.make),
        setModel(response.data.model),
        setYear(response.data.year),
        setColor(response.data.color),
      ])
      .catch((error) => console.log(error.message));
  }, []);


  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full relative">
        <img
          className="w-full h-96 object-cover"
          src="public/assets/images/shelby.png"
          alt="banner-car-image"
        />
      </div>
      <div className="ctc-form">
        <h1 className="flex justify-center items-center text-2xl font-extrabold m-3">
          Atualizar Carro
        </h1>
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
            Atualizar Cadastro
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
