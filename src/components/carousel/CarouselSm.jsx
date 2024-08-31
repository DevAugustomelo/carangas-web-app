




import React, { useEffect, useState } from 'react';
import { MdCircle, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "./carouselSm.css"



function CarouselSm({images}) {
    const [slide, setSlide] = useState(0);

    

    // Carousel controllers
    const navPrev = () => {
        const isFirst = slide === 0;
        const prevSlide = isFirst ? images.length -1 : slide -1;
        setSlide(prevSlide);
    };

    const navNext = () => {
        const isLast = slide === images.length -1;
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
            <div className="crsm-item" style={{ backgroundImage: `url(${images[slide].url})` }}></div>
            <div className="crsm-dots">
                {
                    images.map((item, index) => (
                        <MdCircle key={index} onClick={() => navDot(index) }/>

                    ))
                }
            </div>

        </div>

    )
};

export default CarouselSm;