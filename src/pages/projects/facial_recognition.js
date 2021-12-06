import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"

export default function facial_recognition({ data }) {
  console.log("data:", data)
  const { title, stack, description } = data.site.siteMetadata.faceRecognition
  return (
    <Layout>
      <div className="singleViewProject">
        <h1 className="title"> {title}</h1>
        <img
          className="projectImg"
          src="/faceRecog.jpeg"
          alt="face detection"
        />
        <br />
        <Link
          className="btn"
          to="https://face-detection-bf.netlify.app/"
          target="_blank"
        >
          See the Site
        </Link>
        <Link
          className="btn"
          to="https://github.com/brandonfillpot/facialRecognition"
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
  query fr {
    site {
      siteMetadata {
        faceRecognition {
          description
          stack
          title
        }
      }
    }
  }
`
