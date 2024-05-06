import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/Layout"
import Footer from "../components/footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "../components/slideshow";


const IndexPage = (props) => {
  const object = props.data.allObjects.nodes;

  return (
    <>
    <Layout pageTitle="Josh's Final Project">
      <p>Hello World!</p>

    <SliderCarousel key={object?.id} object={object}></SliderCarousel>
    </Layout>
    <Footer />
    </>
  )
}

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
      description
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
      medium
      mediacount
      markscount
      lendingpermissionlevel
      peoplecount
      period
      periodid
      primaryimageurl
      provenance
      publicationcount
      rank
      relatedcount
      signed
      techniqueid
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

export default IndexPage

export const Head = () => <title>Home Page</title>
