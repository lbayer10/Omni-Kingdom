'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

interface CarouselProps {
    images: string[];
}

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export const Carousel = ({
    images
}: CarouselProps) => {
    const sliderRef = useRef<Slider>(null);

    console.log(images)

    return (
        <section className="carousel" aria-label="Gallery">
            <div className="carousel-corner carousel-corner-top-left"></div>
            <div className="carousel-corner carousel-corner-top-right"></div>
            <div className="carousel-corner carousel-corner-bottom-left"></div>
            <div className="carousel-corner carousel-corner-bottom-right"></div>
            <div className="carousel-border carousel-border-top"></div>
            <div className="carousel-border carousel-border-right"></div>
            <div className="carousel-border carousel-border-bottom"></div>
            <div className="carousel-border carousel-border-left"></div>
            <Slider className="carousel_viewport" {...settings} ref={sliderRef}>
                {images.map((item, index) => (
                    <div key={index} className="carousel_slide" style={{backgroundImage: `url(${item})`}}>
                        <Image width={1153} height={649} src={item} alt="slider item" />
                    </div>
                ))}
            </Slider>
        </section>
    );
};