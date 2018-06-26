module.exports = {
  siteMetadata: {
    title: 'A to Z Eats',
    description: 'A blog about food by Bryan. ',
    pathPrefix: '/atozeats',
  },

  

  plugins: [
  'gatsby-plugin-react-helmet', 
  'gatsby-plugin-styled-components',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "scr",
      path: `${__dirname}/src/`
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "img",
      path: `${__dirname}/src/images`
    }
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      excertp_seperator: `<!-- end -->`
    }
  },
  'gatsby-transformer-remark',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-netlify-cms'
]
}