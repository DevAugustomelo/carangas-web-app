import React from "react";
import './navbar.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="nvb-container">
      <div className="nvb-content">
        <h1 id="title-logo">Carangas</h1>

        <ul className="nvb-menu">
            <li>Home</li>
            <li>Catálogo</li>
            <li>Contato</li>
        </ul>

        <div className="nvb-contato">
            <FaWhatsapp/>
            <span>819 5000-222</span>
        </div>

        <div className="nvb-social">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
