import React from 'react'





const NewCar = () => {
  return (
    <div className="grid-cols-2">
      <div className="">
        <div className="bg-cover">
          <img className="h-auto w-auto object-contain" src="assets/images/shelby.png" alt="banner-car-image" />
        </div>
        <div className="ctc-form">
            <h1>Oba! Carango chegando no catálogo</h1>
          <form action="">
            <input
              type="text"
              id="make"
              name="make"
              placeholder="Digite o fabricante"
            />
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Informe o modelo"
            />
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Informe o ano de fabricação"
            />
            <input
              type="text"
              id="color"
              name="color"
              placeholder="Informe a cor"
            />
            <button>Enviar Cadastro</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Ne