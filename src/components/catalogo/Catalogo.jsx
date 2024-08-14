import React from 'react';
import Card from '../card/Card';
import "./catalogo.css";





function Catalogo() {
    return(
        <div className="cat-container">
            <div className="cat-content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};

export default Catalogo;
