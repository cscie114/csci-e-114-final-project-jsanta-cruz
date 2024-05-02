import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout"
import Footer from "../components/footer"
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
    slidesToScroll: 4,
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

const ImagesPage = (props) => {
  const images = props.data.allImages.nodes;
  // const image = getImage(data.allImages.nodes?.baseimageurl)

  return (
    <div>
    <Layout pageTitle="All Images">
      <Slider {...settings}>
        {images.map((img) => {
          return (
            <div key={img.id}>
              <img
                loading="lazy"
                src={img?.baseimageurl}
                width={200}
                alt={img?.alttext}
              />
            </div>
          );
        })}
      </Slider>
    </Layout>
    </div>
  );
}
    
  export const query = graphql`
  query ImagesPageQuery {
    allImages {
        nodes {
          technique
          renditionnumber
          width
          description
          copyright
          date
          accesslevel
          alttext
          baseimageurl
          caption
          height
          format
          id
          imageid
          lastupdate
          iiifbaseuri
        }
      }
  }
`;

  export default ImagesPage
  
  export const Head = () => <title>Harvard Art Museum Images</title>
