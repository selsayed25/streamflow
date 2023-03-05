module.exports = {
  siteMetadata: {
    title: 'Streamflow',
    siteUrl: 'https://www.yourdomain.tld',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'data-map',
        link: '/data-map',
      }
    ]
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
        ignore: ['**/\.*'],
        fastHash: true,
      },
    },
  ],
}
