import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/Layout'
import Art from '../../components/art'
import Footer from "../../components/footer"

const ArtworkPage = ( { data } ) => {
    const art = data.allGalleryJson.nodes[0];
    return (
            <>
              <Layout pageTitle="Gallery">
                <Art key={art.imageid} art={art}></Art>
              </Layout>
              <Footer />
            </>
          );
        };

        export const query = graphql`
  query GalleryPageQuery ($imageid: Int) {
    allGalleryJson(filter: {imageid: {eq: $imageid}}) {
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


export default ArtworkPage;


export const Head = () => <title>Harvard Art Museum Images</title>;
