import React, { useState } from "react"
import PX1 from "../Picture/MU1.jpg"
import PX2 from "../Picture/MU2.jpg"
import PX3 from "../Picture/runi.jpg"
import PX4 from "../Picture/OLDTRAF.jpg"
import Slider from "react-slick"
import 'slick-carousel'

const Paps = [
    {source: PX1},
    {source: PX2},
    {source: PX3},
    {source: PX4},

]

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      width: 500,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };
  
    return (
        <Slider {...carouselSettings} className="w-[50rem] overflow-hidden pt-[170px]">
          {Paps.map((item) => (
            <div key={item.source}>
              <img
                className="object-cover h-full mx-auto"
                src={item.source}
                alt="Card 1"
              />
            </div>
          ))}
        </Slider>
    )
}