require("dotenv").config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter w/ styled-components`,
    description: `Gatsby starter using styled-components`,
    author: `@blakenoll`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "GATSBY_FORMSPREE_CONTACT_FORM_ID",
          "GATSBY_FORMSPREE_SUBSCRIBE_FORM_ID",
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
