import React, { Component } from "react";
import Slider from "react-slick";
import './mainSlider.scss'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            autoplay: true,
            dots: true,
            infinite: true,
            autoplaySpeed: 5000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="sliderMain">
                <Slider {...settings}>
                    <div>
                        <img style={{margin: '0 auto', height: '800px', width: "100%", 'objectFit': 'contain'}} src="https://i.ytimg.com/vi/aEr6K1bwIVs/maxresdefault.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{margin: '0 auto', height: '800px', width: "100%", 'objectFit': 'contain'}} src="https://corgit.xyz/wp-content/uploads/2019/08/-%D0%BA%D1%80%D0%B5%D0%BC%D0%BD%D0%B8%D0%B5%D0%B2%D0%B0%D1%8F-%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-6-%D1%81%D0%B5%D0%B7%D0%BE%D0%BD-e1566218223108.png" alt="" />
                    </div>
                    <div>
                        <img style={{margin: '0 auto', height: '800px', width: "100%", 'objectFit': 'contain'}} src="https://streamcoimg-a.akamaihd.net/000/154/2668/1542668-Banner-L2-6217afd79a9680d04ea21d06810c1795.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}