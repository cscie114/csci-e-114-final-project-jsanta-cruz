import * as React from "react"
import {objectContain} from "../components/slideshow.module.css"


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
      <div>
          <ul style={styles.galleryImg}>
              <li width={200}>
                <div width={200}>
                  <img style={styles.imgList}
                  className={objectContain}
                    loading="lazy"
                    src={art?.baseimageurl}
                    width={200} height={200}
                    alt={art?.alttext}
                  />
                  <p width={200}>{art?.caption}</p>
                  <p width={200}>{art?.alttext}</p>
                </div>
              </li>
        </ul>
      </div>
    );
  };
  
  export default Art;