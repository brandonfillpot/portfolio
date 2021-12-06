import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Brandon Fillpot</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
