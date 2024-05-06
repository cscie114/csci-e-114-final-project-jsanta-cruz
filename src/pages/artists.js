import * as React from "react";
import { graphql } from "gatsby";
import { createRoot } from "react-dom/client";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const ArtistPage = (props) => {

  // const [state, setState] = useState();

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
    artistImag: {
      width: "200px"
    },
    btnStyle: {
      display: "block"
    },
    articleStyle: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    }
  };
  
  return (
    <>
      <Layout pageTitle="Josh's Final Project">
        <section style={styles.articleStyle}>
        <article >
        <StaticImage src="../images/van-gogh.webp" style={styles.artistImag}></StaticImage>
        <button style={styles.btnStyle}
          onClick={() => {
            const root = createRoot(
              document.getElementById("layout-module--target--ef9ac")
            );
            const element = (
              <ul style={styles.galleryImg}>
                {vanGogh?.map((img, i) => {
                  return (
                    <li key={i} width={200}>
                      <div  width={200}>
                        {img?.images?.map((img, i) => {
                          return (
                            <img key={i}
                              loading="lazy"
                              src={img?.baseimageurl}
                              width={200}
                              height={200}
                              data-img-id={img?.imageid}
                              alt={img?.alttext}
                            />
                          );
                        })}
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
        </article>
        <article >
        <StaticImage src="../images/Kirchner.jpg" style={styles.artistImag}></StaticImage>
        <button style={styles.btnStyle}
          onClick={() => {
            const root = createRoot(
              document.getElementById("layout-module--target--ef9ac")
            );
            const element = (
              <ul style={styles.galleryImg}>
                {kirchner?.map((img, i) => {
                  return (
                    <li key={i} width={200}>
                      <div width={200}>
                        {img?.images?.map((img, i) => {
                          return (
                            <img key={i}
                              loading="lazy"
                              src={img?.baseimageurl}
                              width={200}
                              height={200}
                              data-img-id={img?.imageid}
                              alt={img?.alttext}
                            />
                          );
                        })}
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
        </article>
        <article >
        <StaticImage src="../images/sargent.jpeg" style={styles.artistImag}></StaticImage>
        <button style={styles.btnStyle}
          onClick={() => {
            const root = createRoot(
              document.getElementById("layout-module--target--ef9ac")
            );
            const element = (
              <ul style={styles.galleryImg}>
                {sargent?.map((img, i) => {
                  return (
                    <li key={i} width={200}>
                      <div width={200}>
                        {img?.images?.map((img) => {
                          return (
                            <img key={i}
                              loading="lazy"
                              src={img?.baseimageurl}
                              width={200}
                              height={200}
                              data-img-id={img?.imageid}
                              alt={img?.alttext}
                            />
                          );
                        })}
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
        </article>
        </section>
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
