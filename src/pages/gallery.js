import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "../components/slideshow";
import {objectContain} from "../components/slideshow.module.css"

const GalleryPage = ({ data }) => {
  const images = data.allGalleryJson.nodes;
  // const image = getImage(data.allImages.nodes?.baseimageurl)
  const styles = {
    galleryImg: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      listStyle: "none",    
    },

  };

  return (
    <>
      <Layout pageTitle="All Images">
        <ul style={styles.galleryImg}>
          {images?.map((img, i) => {
            return (
              <li width={200}>
                <div key={i} width={200}>
                  <img style={styles.imgList}
                  className={objectContain}
                    loading="lazy"
                    src={img?.baseimageurl}
                    width={200} height={200}
                    alt={img?.alttext}
                  />
                  <p width={200}>{img?.caption}</p>
                  <p width={200}>{img?.alttext}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Layout>
      <Footer />
    </>
  );
};

export const query = graphql`
  query GalleryPageQuery {
    allGalleryJson {
      nodes {
        baseimageurl
        alttext
        accesslevel
        caption
        copyright
        date
        description
        fileid
        format
        height
        id
        idsid
        iiifbaseuri
        imageid
        lastupdate
        renditionnumber
        technique
        width
      }
    }
  }
`;

export default GalleryPage;

export const Head = () => <title>Harvard Art Museum Images</title>;
