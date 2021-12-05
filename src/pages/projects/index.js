import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const { title, stack, description } = data.site.siteMetadata.bookshelf
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>
      <Link to="/bookshelf">
        <div className="singleProject">
          <img src="/bookshelf.jpeg" className="projectImg" />
          <h3>{title}</h3>
          <p className="stack">{stack}</p>
        </div>
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        bookshelf {
          title
          stack
          description
          imgUrl
        }
      }
    }
  }
`
