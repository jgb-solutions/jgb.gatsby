module.exports = {
  siteMetadata: {
    title: 'JGB Solutions',
    description: 'Web & Mobile Development Services for small to medium sized businesses.',
    author: '@jgb_solutions',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'JGB Solutions',
        short_name: 'JGB Solutions',
        start_url: '/',
        background_color: '#fb9801',
        theme_color: '#fb9801',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-material-ui',
    //   // options: {
    //   //   pathToTheme: 'src/themes/default',
    //   // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
