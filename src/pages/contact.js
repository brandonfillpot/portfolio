import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="info">
        <h1 className="contact">Contact</h1>
        <h3>Email:</h3>
        <p>brandonfillpot@gmail.com</p>
        <h3>Phone Number</h3>
        <p>(559)-387-7844</p>
        <h3>LinkedIn</h3>
        <Link to="https://www.linkedin.com/in/brandonfillpot/" target="_blank">
          <p>https://www.linkedin.com/in/brandonfillpot/</p>
        </Link>
        <h3>GitHub:</h3>
        <Link to="https://github.com/brandonfillpot" target="_blank">
          <p>https://github.com/brandonfillpot</p>
        </Link>
      </div>
    </Layout>
  )
}
