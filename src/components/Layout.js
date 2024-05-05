import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import { nav, target } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {

    // Get the site title (data from gatsby-config.js)
    const data = useStaticQuery(graphql`
    query {
    site {
        siteMetadata {
            title
        }
    }
    }
`)
return (
<div>
  <header>
    <div >
    <Link to="/"><StaticImage src="https://ids.lib.harvard.edu/ids/iiif/437958013/full/!800,800/0/default.jpg" height={100} alt="NFL logo"></StaticImage></Link>
    </div>
    <nav className={nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/artists/">Featured Artists</Link>
        </li>
        <li>
          <Link to="/gallery/">Gallery</Link>
        </li>
        <li>
          <Link to="/contact/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  </header>
  <main id={target}>
    <h2>{pageTitle}</h2>
    {children}
  </main>
</div>
);
};

export default Layout;
