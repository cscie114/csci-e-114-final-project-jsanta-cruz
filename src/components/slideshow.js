import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    autoPlay: false,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

const SliderCarousel = ({ img }) => {
    const image = getImage(img?.baseimageurl)

    return (
<div>
      <Slider {...settings}>
        <div>
          <GatsbyImage image={image} />
        </div>
      </Slider>
    </div>
    )
};

export default SliderCarousel

