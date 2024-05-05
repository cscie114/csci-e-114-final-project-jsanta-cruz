import * as React from "react";
import { createRoot } from "react-dom/client";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";

const ArtistPage = (props) => {
  let vanGogh = props.data.allVanGoghJson.nodes;
  let kirchner = props.data.allKirchnerJson.nodes;
  let sargent = props.data.allSingerJson.nodes;

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
      <Layout pageTitle="Josh's Final Project">
        <StaticImage src="../images/van-gogh.webp"></StaticImage>
        <button
          onClick={() => {
            const root = createRoot(
              document.getElementById("layout-module--target--ef9ac")
            );
            const element = (
              <ul style={styles.galleryImg}>
                {vanGogh?.map((img, i) => {
                  return (
                    <li width={200}>
                      <div key={i} width={200}>
                        <img
                          loading="lazy"
                          src={img?.primaryimageurl}
                          width={200}
                          height={200}
                          alt={img?.title}
                        />
                        <p width={200}>{img?.title}</p>
                        <p width={200}>{img?.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
            root.render(element);
          }}
        >
          Vincent Van Gogh
        </button>
        <StaticImage src="../images/Kirchner.jpg"></StaticImage>
        <button
          onClick={() => {
            const root = createRoot(
              document.getElementById("layout-module--target--ef9ac")
            );
            const element = (
              <ul style={styles.galleryImg}>
                {kirchner?.map((img, i) => {
                  return (
                    <li width={200}>
                      <div key={i} width={200}>
                        <img
                          loading="lazy"
                          src={img?.primaryimageurl}
                          width={200}
                          height={200}
                          alt={img?.title}
                        />
                        <p width={200}>{img?.title}</p>
                        <p width={200}>{img?.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
            root.render(element);
          }}
        >
          Ernst Ludgwig Kirchner
        </button>
        <StaticImage src="../images/sargent.jpeg"></StaticImage>
        <button
          onClick={() => {
            const root = createRoot(
              document.getElementById("layout-module--target--ef9ac")
            );
            const element = (
              <ul style={styles.galleryImg}>
                {sargent?.map((img, i) => {
                  return (
                    <li width={200}>
                      <div key={i} width={200}>
                        <img
                          loading="lazy"
                          src={img?.primaryimageurl}
                          width={200}
                          height={200}
                          alt={img?.title}
                        />
                        <p width={200}>{img?.title}</p>
                        <p width={200}>{img?.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
            root.render(element);
          }}
        >
          John Singer Sargent
        </button>
      </Layout>
    </>
  );
};

export const query = graphql`
  query vanGoghPageQuery {
    allVanGoghJson {
      nodes {
        century
        accessionyear
        accessionmethod
        accesslevel
        classification
        classificationid
        colorcount
        contact
        contextualtextcount
        copyright
        creditline
        culture
        datebegin
        dated
        dateend
        department
        dimensions
        imagecount
        primaryimageurl
        provenance
        peoplecount
        publicationcount
        rank
        relatedcount
        url
        title
        technique
        techniqueid
        images {
          alttext
          baseimageurl
          copyright
          date
          description
          displayorder
          format
          height
          idsid
          iiifbaseuri
          imageid
          publiccaption
          renditionnumber
          technique
          width
        }
        description
        department
      }
    }
    allKirchnerJson {
      nodes {
        accessionmethod
        accessionyear
        century
        accesslevel
        classification
        classificationid
        contextualtextcount
        creditline
        culture
        datebegin
        dated
        dateend
        department
        dimensions
        imagecount
        images {
          alttext
          baseimageurl
          copyright
          date
          description
          displayorder
          format
          height
          idsid
          iiifbaseuri
          imageid
          renditionnumber
          technique
          width
        }
        primaryimageurl
        provenance
        publicationcount
        rank
        technique
        techniqueid
        title
        url
      }
    }
    allSingerJson {
      nodes {
        accessionmethod
        accessionyear
        accesslevel
        century
        classification
        classificationid
        contextualtextcount
        creditline
        culture
        datebegin
        dated
        dateend
        department
        dimensions
        imagecount
        images {
          baseimageurl
          copyright
          date
          displayorder
          format
          height
          idsid
          iiifbaseuri
          imageid
          publiccaption
          renditionnumber
          technique
          width
        }
        medium
        primaryimageurl
        provenance
        publicationcount
        rank
        technique
        techniqueid
        title
        url
      }
    }
  }
`;
export default ArtistPage;

export const Head = () => <title>Featured Artists</title>;
