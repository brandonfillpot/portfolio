import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  console.log("data:", data)
  const metaData = data.site.siteMetadata
  console.log("metadata:", metaData)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>
      <div className="projects">
        <div className="singleProject">
          <Link to="/projects/bookshelf">
            <img src="/bookshelf.jpeg" className="projectImg" />
            <h3>{metaData.bookshelf.title}</h3>
            <p className="stack">{metaData.bookshelf.stack}</p>
          </Link>
        </div>
        <div className="singleProject">
          <Link to="/projects/facial_recognition">
            <img src="/faceRecog.jpeg" className="projectImg" />
            <h3>{metaData.faceRecognition.title}</h3>
            <p className="stack">{metaData.faceRecognition.stack}</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        bookshelf {
          title
          description
          stack
        }
        faceRecognition {
          title
          description
          stack
        }
      }
    }
  }
`
