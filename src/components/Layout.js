import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
// import { logo, nav } from './layout.module.css';

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
    </div>
    <h3>{data.site.siteMetadata.title}</h3>
    <nav >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/images-page/">Gallery</Link>
        </li>
        <li>
          <Link to="/contact/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <h2>{pageTitle}</h2>
    {children}
  </main>
</div>
);
};

export default Layout;
