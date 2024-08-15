import React from 'react';
import './footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';




const Footer = () => {
    return(
        <div className="ftr-container">
            <div className="ftr-content">
                <div className="ftr-item">
                    <ul>
                        <li>Home</li>
                        <li>Catálogo</li>
                        <li>Contato</li>
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
    )
};

export default Footer;