import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Layout from "../components/Layout"
import Home from "../sections/Home"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

const IndexPage = () => {
  useEffect(() => {
    Aos.init({ duration: 700 })
  }, [])
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}
export default IndexPage
