import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { articleExt } from "../components/layout.module.css"
import Footer from "../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "../components/slideshow";
import fetch from "node-fetch";

const IndexPage = (props) => {
  const object = props.data.allObjects.nodes;

  const [exhibitData, setExhibitData] = useState({});
  useEffect(() => {
    const venue = "HAM";
    fetch(`/.netlify/functions/havardExhibitionAPI?venue=${venue}`, {
      method: "GET",
    })
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log("exhibit: ", json.data);
        setExhibitData(json.data.records);
      });
  }, [exhibitData.title]);
  console.log("exhibit data", exhibitData);
  const styles = {
    exhibitDesc: {
      // whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxHeight: "200px"
    },
  };
  return (
    <>
      <Layout pageTitle="Upcoming Exhibitions">
        <section className={articleExt}>
          {Object.entries(exhibitData).map((item, i) => {
            return (
              <>
                <article key={i}>
                  <img
                    loading="lazy"
                    width={300}
                    src={item[1].primaryimageurl}
                    alt={item[0].title}
                  />
                </article>
                <aside>
                  <p style={styles.exhibitDesc}>{item[1].description}</p>
                  <p >{item[1].begindate}</p>

                </aside>
              </>
            );
          })}
        </section>
        <h3>Hello World</h3>


        <SliderCarousel key={object?.id} object={object}></SliderCarousel>
      </Layout>
      <Footer />
    </>
  );
};

export const query = graphql`
  query ObjectsQuery {
    allObjects {
      nodes {
        accessionmethod
        accessionyear
        accesslevel
        century
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
        dateoffirstpageview
        dateoflastpageview
        department
        dimensions
        division
        exhibitioncount
        groupcount
        id
        imagecount
        imagepermissionlevel
        images {
          baseimageurl
          copyright
          date
          displayorder
          format
          height
          iiifbaseuri
          imageid
          renditionnumber
          width
        }
        lastupdate
        objectid
        objectnumber
        mediacount
        markscount
        lendingpermissionlevel
        peoplecount
        primaryimageurl
        publicationcount
        rank
        relatedcount
        title
        titlescount
        totalpageviews
        totaluniquepageviews
        url
        verificationlevel
        verificationleveldescription
        worktypes {
          worktype
          worktypeid
        }
        seeAlso {
          format
          id
          profile
          type
        }
        people {
          alphasort
          birthplace
          culture
          deathplace
          displaydate
          displayname
          displayorder
          gender
          name
          personid
          role
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
