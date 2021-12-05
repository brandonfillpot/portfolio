/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],

  siteMetadata: {
    bookshelf: {
      title: "BookShelf",
      stack:
        "PostgreSQL - Node.js - Express.js - Javascript - React - HTML - CSS",
      description:
        "A full stack web application where users can register, login, browse items, add to cart, and checkout using Stripe integration.",
      imgUrl: "/bookshelf.jpeg",
    },
  },
}
