import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout"
import Footer from "../components/footer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    autoPlay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const ImagesPage = (props) => {
    const images = props.data.allImages.nodes;
    // const image = getImage(data.allImages.nodes?.baseimageurl)

    return (
        
            <div>
            {images.map((img) => {
              return (
                <div key={img.id}>
                    <div>
                      <div>{img?.alttext}</div>
                      <Slider {...settings}>
                      <img
                        loading="lazy"
                        src={img?.baseimageurl}
                        width={100}
                        alt={img?.alttext}
                      />
                                </Slider>

                    </div>
                </div>
              );
            })}
            </div>
      
    );
    // return (
    //   <div>
    //     <Layout pageTitle="All Images">
    //       <ul>
    //         {images.map((img) => {
    //           return (
    //             <li key={img.id}>
    //                 <div>
    //                   <div>{img?.alttext}</div>
    //                   <img
    //                     loading="lazy"
    //                     src={img?.baseimageurl}
    //                     width={100}
    //                     alt={img?.alttext}
    //                   />
    //                 </div>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </Layout>
    //     <Footer></Footer>
    //   </div>
    // );
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
