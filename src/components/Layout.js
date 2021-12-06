import React from "react"
import Navbar from "./navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>
          Copyright <span>&#169;</span> Brandon Fillpot 2021
        </p>
      </footer>
    </div>
  )
}
