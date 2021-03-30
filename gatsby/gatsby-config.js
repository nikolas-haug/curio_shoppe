require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: 'Curio Shoppe',
    author: 'Nikolas Haug',
    description: 'A simple e-commerce shoppe built with gatsby, sanity, and snipcart',
    email: 'nikolas@nikolashaug.com',
    // siteUrl: ''
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'alegreya sans\:300, 300i, 400, 400i, 700'
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'danec5us',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.29',
        publicApiKey: 'OGVjMGUyY2ItYzk0ZC00MmY2LWIyN2ItOTk0ODU5NzNjOTkyNjM3NDEzMzY3ODQzMzYwNTgx',
        defaultLang: 'en',
        // currencey: 'usd',
        openCartOnAdd: true,
        useSideCart: true
      }
    }
  ],
}
