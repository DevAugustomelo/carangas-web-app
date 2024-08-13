




import { useState, useEffect } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


import "./carousel.css"


const Carousel = () => {
    const imgList = [
        { id: 1, url: "https://c.wallhere.com/photos/8b/89/1920x1080_px_car_Oldtimers_volkswagen-684742.jpg!d" },
        { id: 2, url: "https://omunicipio.com.br/wp-content/uploads/2022/08/dos-anos-30-aos-90-conheca-20-veiculos-antigos-que-marcaram-epoca-em-brusque-reliquias-de-brusque-opc-2-ok-1280x720.jpg" },
        { id: 3, url: "https://cdn.pixabay.com/photo/2014/07/08/05/07/fusca-386526_1280.jpg" },
    ];
    
    const [slide, setSlide] = useState(0);

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

    return (
        <div className="crs-container">
            <div className="crs-arrows">
                <MdArrowBackIos onClick={ () => navPrev() }/>
                <MdArrowForwardIos onClick={ () => navNext() }/>
            </div>

            <div 
            className="crs-item" 
            style={{ backgroundImage: `url(${imgList[slide].url})` }}>
            </div>
            <div className="crs-dots">
                {/* Make dot icons for carousel */}
                {imgList.map((item, index) => (
                    <BsCircleFill onClick={ () => navDot(index) }/>
                ))}
            </div>
        </div>
    )
}

export default Carousel;