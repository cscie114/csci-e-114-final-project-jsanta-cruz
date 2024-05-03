import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  autoPlay: true,
  centerMode: true,
  centerPadding: '20px',
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 10,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
};

const SliderCarousel = ({ images }) => {

    return (
<div>
<Slider {...settings}>
        {images.map((img) => {
          return (
            <div key={img.id} >
              <img
                loading="lazy"
                src={img?.baseimageurl}
                width={200}
                alt={img?.alttext}
              />
              <p>{img?.caption}</p>
              <p>{img?.alttext}</p>
            </div>
          );
        })}
      </Slider>
    </div>
    )
};

export default SliderCarousel

