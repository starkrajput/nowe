/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AutoSlider.css';

const AutoSlider = ({ cards }) => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '1',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    useEffect(() => {

        const handleResize = () => {
            const newSlidesToShow = window.innerWidth < 600 ? 1 : window.innerWidth < 1024 ? 3 : 5;
            setSettings(prevSettings => ({
                ...prevSettings,
                slidesToShow: newSlidesToShow,
            }));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
         
        <div className="auto-slider">
            <div className="section-2-content">
                <h2>Our Software Apps</h2>
                <p>Proven result of 85% growth</p>
            </div>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="slide">
                        <div className="card">
                            <img src={card.image} alt={card.header} />
                            <h3>{card.header}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AutoSlider;
