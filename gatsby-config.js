module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    description: `Website made with Gatsby, GraphQL, and Bulma.`,
    author: `@jojonicho`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        background_color: `#fed83e`,
        theme_color: `#fed83e`,
        display: `minimal-ui`,
        icon: `src/images/profpic.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     fieldName: `github`,
    //     typeName: `GitHub`,
    //     url: `https://api.github.com/graphql`,
    //     refetchInterval: 60 * 60 * 24
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: `anilist`,
        // Arbitrary name for the remote schema Query type
        typeName: `Anilist`,
        // Url to query from
        url: `https://graphql.anilist.co`,
        refetchInterval: 60 * 60 * 24 * 7,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
