import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { nav, target } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <StaticImage
              src="../images/HAM_logo.jpeg"
              height={100}
              placeholder="blurred"
              loading="eager"
              alt="Havard Art Museums"
            ></StaticImage>
          </Link>
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
              <Link to="/artwork/">Gallery</Link>
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
        <div id={target}></div>
      </main>
    </div>
  );
};

export default Layout;
