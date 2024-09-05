import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="ftr-container">
      <div className="ftr-content">
        <div className="ftr-item">
          <ul>
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
        </div>
        <div className="ftr-item">
          <span>Copyright © 2024</span>
          <span>Paulista, PE</span>
        </div>
        <div className="ftr-item">
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
