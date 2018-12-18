module.exports = {
  siteMetadata: {
    title: 'Grommet patterns',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Grommet Patterns`,
        short_name: `Grommet Patterns`,
        start_url: `/`,
        display: "standalone",
        theme_color: "#865CD6",
        background_color: "#FFD6D6",
        icon: `src/pages/patterns/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'patterns',
        path: `${__dirname}/src/pages/patterns`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
            resolve: 'gatsby-remark-images',
            options: {
              quality: 100
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-124507483-5',
        anonymize: true,
        respectDNT: true,
        cookieDomain: 'grommet-patterns.netlify.com',
      },
    },
  ],
};
