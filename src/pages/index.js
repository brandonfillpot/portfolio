import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Full stack developer based in San Jose, CA</p>
          <Link className={styles.btn} to="/projects">
            See My Portfolio
          </Link>
        </div>
        <img
          src="/earthbackground.png"
          alt="site banner"
          className={styles.img}
        />
      </section>
    </Layout>
  )
}
