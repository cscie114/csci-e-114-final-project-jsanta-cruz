import * as React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { objectContain, imageBG } from "./slideshow.module.css"

const settings = {
  autoPlay: true,
  centerMode: true,
  centerPadding: '20px',
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
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

const SliderCarousel = ({ object }) => {
  return (
    <div className={imageBG}>
      <Slider {...settings}>
        {object.map((obj, i) => {
          return (
            <div key={i} >
               <img loading="lazy"
                    className={objectContain}
                    src={obj?.primaryimageurl}
                    width={200} height={200}
                    alt=""
                  />
              {/* {obj?.images?.map((img) => {
                return (
                  <img loading="lazy"
                   className={objectContain}
                    src={img?.baseimageurl}
                    width={200} height={200}
                    alt=""
                  />
                );
              })} */}
            </div>
          );
        })}
      </Slider>
    </div>
  );

//     return (
// <div>
// <Slider {...settings}>
//         {object.map((obj, i) => {
//           return (
//             <div key={i} >
//               {/* {obj?.images?.map((img) => {
//                 return ( */}
//               <img
//                 loading="lazy"
//                 src={obj?.primaryimageurl}
//                 width={200}
//                 alt=""
//               />
//           {/* ); })}  */}

//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//     )
};

export default SliderCarousel

