import * as React from "react";
import { objectContain } from "../components/slideshow.module.css";

const Art = ({ art }) => {
  const styles = {
    galleryImg: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      listStyle: "none",
    },
  };
  return (
    <section style={styles.galleryImg}>
      <article>
        <img
          style={styles.imgList}
          className={objectContain}
          loading="lazy"
          src={art?.baseimageurl}
          width={300}
          alt={art?.alttext}
        />
        <p>{art?.caption}</p>
        <p>{art?.alttext}</p>
      </article>
      <article>
        <ul>
          <li>Image Id: {art?.imageid}</li>
          <li>Date: {art?.date}</li>
          <li>Dimensions: {art?.height} X {art?.width}
          </li>
          <li>Rendition No.: {art?.renditionnumber} </li>
          <li>Copyright: {art?.copyright}</li>
        </ul>
      </article>
    </section>
  );
};

export default Art;
