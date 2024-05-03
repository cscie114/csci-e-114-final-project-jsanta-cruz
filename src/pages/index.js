import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout"
import Footer from "../components/footer"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "../components/slideshow";


const IndexPage = ({data}) => {
  const images = data.allImages.nodes;

  return (
    <>
    <Layout pageTitle="Josh's Final Project">
      <p>Hello World!</p>
    </Layout>
    <SliderCarousel key={images?.id} images={images}></SliderCarousel>
    <Footer />
    </>
  )
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

export default IndexPage

export const Head = () => <title>Home Page</title>
