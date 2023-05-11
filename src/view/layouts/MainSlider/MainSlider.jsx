import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import './mainSlider.scss'
import MoviesService from "../../../utils/services/MoviesService";

const SimpleSlider = ({RTL}) => {

    const [slide, setSlide] = useState([])
    const {getResponse, getPopularCartoons} = MoviesService();

    useEffect(() => { 
        getResponse().then(res => setSlide(res.results.map(item => item.poster_path)));
    }, [])

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 6000,
        autoplaySpeed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        variableWidth: true,
        adaptiveHeight: true,
        cssEase: "linear",
        rtl: RTL
    };

    return (
        <div className="sliderMain">
            <Slider {...settings}>
                {slide.map((item, i) => (
                    <img key={i} className='single_item-img' src={`https://image.tmdb.org/t/p/w500${item}`} alt="" />
                ))}
            </Slider>
        </div>
    );
}

export default SimpleSlider;