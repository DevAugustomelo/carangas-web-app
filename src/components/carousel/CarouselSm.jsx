




import React, { useEffect, useState } from 'react';
import { MdCircle, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "./carouselSm.css"



function CarouselSm() {
    const [slide, setSlide] = useState(0);

    const imgList = [
        { id: 1, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15494716819.jpg?s=fill&w=1920&h=1440&q=75" },
        { id: 2, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem1550402785.jpg?s=fill&w=1920&h=1440&q=75" },
        { id: 3, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15504708883.jpg?s=fill&w=1920&h=1440&q=75" },
        { id: 4, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15494798765.jpg?s=fill&w=1920&h=1440&q=75" },
        { id: 5, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15495203533.jpg?s=fill&w=1920&h=1440&q=75" },
        { id: 6, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem15495485325.jpg?s=fill&w=1920&h=1440&q=75" },
        { id: 7, url: "https://cdn.pixabay.com/photo/2014/07/08/05/07/fusca-386526_1280.jpg" },
        { id: 8, url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202408/20240809/volkswagen-fusca-1.2-8v-gasolina-2p-manual-wmimagem1550437429.jpg?s=fill&w=1920&h=1440&q=75" },
    ];

    // Carousel controllers
    const navPrev = () => {
        const isFirst = slide === 0;
        const prevSlide = isFirst ? imgList.length -1 : slide -1;
        setSlide(prevSlide);
    };

    const navNext = () => {
        const isLast = slide === imgList.length -1;
        const nextSlide = isLast ? 0 : slide + 1;
        setSlide(nextSlide);
    };

    const navDot = (index) => {
        setSlide(index)
    };

    //Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
        navNext();
        }, 4000);
        
        return () => clearInterval(interval);
    }, [navNext]);
    //Finish controllers
        
    return(
        <div className="crsm-container">
            <div className="crsm-arrows">
                <MdArrowBackIos onClick={ () => navPrev() }/>
                <MdArrowForwardIos onClick={ () => navNext() } />
            </div>
            <div className="crsm-item" style={{ backgroundImage: `url(${imgList[slide].url})` }}></div>
            <div className="crsm-dots">
                {
                    imgList.map((item, index) => (
                        <MdCircle key={index} onClick={() => navDot(index) }/>

                    ))
                }
            </div>

        </div>

    )
};

export default CarouselSm;