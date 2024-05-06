import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {objectContain} from "../components/slideshow.module.css"

const GalleryPage = (props) => {
  const artwork = props.data.allGalleryJson.nodes;
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
          {artwork?.map((art, i) => {
            return (
              <li key={i} width={200}>
                <div  width={200}>
                <Link to={"/artwork/" + art?.imageid}>
                  <img style={styles.imgList}
                  className={objectContain}
                    loading="lazy"
                    src={art?.baseimageurl}
                    width={200} height={200}
                    alt={art?.alttext}
                  />
                  <p width={200}>{art?.caption}</p>
                  <p width={200}>{art?.alttext}</p>
                  </Link>
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
