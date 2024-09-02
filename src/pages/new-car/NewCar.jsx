import React, { useState } from 'react'
import api from '../../services/api/carangasApi';





const NewCar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const changeOnClick = event => {
    event.preventDefault();

    const cars = {
      make,
      model,
      year,
      color
    };

    api.post("/cars/add", cars)
    .then(res => alert(res.data))
    .catch(error => console.log(error.message));

    setMake("");
    setModel("");
    setYear("");
    setColor("");
  }



  return (
    <div className="grid-cols-2">
      <div className="">
        <div className="bg-cover">
          <img className="h-auto w-auto object-contain" src="assets/images/shelby.png" alt="banner-car-image" />
        </div>
        <div className="ctc-form">
            <h1>Oba! Carango chegando no catálogo</h1>
          <form onSubmit={changeOnClick} encType='multipart/form-data'>
            <input
              type="text"
              id="make"
              name="make"
              value={make}
              placeholder="Digite o fabricante"
              onChange={e => setMake(e.target.value)}
            />
            <input
              type="text"
              id="model"
              name="model"
              value={model}
              placeholder="Informe o modelo"
              onChange={e => setModel(e.target.value)}
            />
            <input
              type="text"
              id="year"
              name="year"
              value={year}
              placeholder="Informe o ano de fabricação"
              onChange={e => setYear(e.target.value)}
            />
            <input
              type="text"
              id="color"
              name="color"
              value={color}
              placeholder="Informe a cor"
              onChange={e => setColor(e.target.value)}
            />
            <button type="submit">Enviar Cadastro</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default NewCar