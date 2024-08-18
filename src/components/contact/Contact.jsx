import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="ctc-container">
      <div className="ctc-content">
        <div className="ctc-info">
          <h3>Rua Primeiro Exemplo, Dados Mock</h3>
          <h2>Cidade - EX</h2>
          <h4>CEP 12345-010</h4>
          <h1>819 8898-7878</h1>
        </div>
        <div className="ctc-form">
          <form action="">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Informe seu e-mail"
            />
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="Informe seu Telefone"
            />
            <textarea
              name="mensagem"
              id="mensagem"
              cols={30}
              rows={10}
              placeholder="Digite aqui sua mensagem"
            ></textarea>
            <button>Enviar Mensagem</button>
          </form>
        </div>
      </div>
      <div className="ctc-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17236.650357213097!2d-34.861373489679316!3d-7.94513397465744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3dbf4a9cd5f1%3A0x45bf1641ad29a799!2sIFPE%20-%20Campus%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1723605476340!5m2!1spt-BR!2sbr"
          width="1200"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
