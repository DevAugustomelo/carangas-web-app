import React from "react";
import "./navbar.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nvb-container">
      <div className="nvb-content">
        <Link to={"/"}>
          <h1 id="title-logo">Carangas</h1>
        </Link>

        <ul className="nvb-menu">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/catalogo"}>
            <li>Catálogo</li>
          </Link>
          <Link to={"/"}>
            <li>Contato</li>
          </Link>
        </ul>

        <div className="nvb-contato">
          <FaWhatsapp />
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
