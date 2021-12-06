import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"

export default function bookshelf({ data }) {
  console.log("data:", data)
  const { title, stack, description } = data.site.siteMetadata.bookshelf
  return (
    <Layout>
      <div className="singleViewProject">
        <h1 className="title"> {title}</h1>
        <img className="projectImg" src="/bookshelf.jpeg" alt="bookshelf" />
        <br />
        <Link
          className="btn"
          to="http://tech-tycoons.herokuapp.com/"
          target="_blank"
        >
          See the Site
        </Link>
        <Link
          className="btn"
          to="https://github.com/2105-SJS/tech-tycoons"
          target="_blank"
        >
          GitHub Repo
        </Link>
        <h4>{stack}</h4>
        <p className="description">{description}</p>
      </div>
    </Layout>
  )
}

export const myQuery = graphql`
  query bookshelf {
    site {
      siteMetadata {
        bookshelf {
          description
          stack
          title
        }
      }
    }
  }
`
