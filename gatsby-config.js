module.exports = {
  siteMetadata: {
    title: `Velo Studio`,
    description: `Cycling inspired t-shirts with panache!`,
    author: `@jonurry`,
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
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `velo-studio`,
        short_name: `velo-studio`,
        start_url: `/`,
        background_color: `#4A4A4A`,
        theme_color: `#4A4A4A`,
        display: `minimal-ui`,
        icon: `src/images/velo-studio.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
