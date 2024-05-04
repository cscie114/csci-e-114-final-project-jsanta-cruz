/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Final Project`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
            "gatsby-plugin-image",
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                "name": "images",
                "path": "./src/images/"
              },
              __key: "images"
            },
            "gatsby-transformer-json",
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `data`,
                path: `${__dirname}/data/`,
              },
            },

  // "gatsby-plugin-sass",
]
};