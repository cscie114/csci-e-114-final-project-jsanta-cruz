import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { articleExt } from "../components/layout.module.css";
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
      maxHeight: "200px",
    },
  };
  return (
    <>
      <Layout pageTitle="Welcome to the Harvard Art Museums">
        <p>Just steps away from Harvard Square, the Harvard Art Museums welcome visitors from around the corner and around the world! Enjoy the many amenities that greet you upon entering the museums' expansive and beautifully restored Calderwood Courtyard on the first floor. From there, grab a coffee or snack in Jenny's Cafe or browse the many unique gifts in the museum shop before exploring over 50 galleries of art across three floors.

The Harvard Art Museums are committed to creating an environment that fosters inclusion and belonging. Please join us in ensuring that every visitor feels welcomed and respected.</p>
<h3>Upcoming Exhibitions</h3>

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
                <b> <p>{item[1].title}</p></b>
                  <p style={styles.exhibitDesc}>{item[1].description}</p>
                  <p>{item[1].begindate}</p>
                </aside>
              </>
            );
          })}
        </section>
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
