import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ShapeIndex from "../components/DecorationElements/shapeIndex"

import HeroSection from "../components/HomePage/HeroSection/heroSection"
import AboutSection from "../components/HomePage/AboutSection/AboutSection"

const IndexPage = () => (
  <Layout>
    
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroSection />
      <AboutSection />
  </Layout>
)

export default IndexPage
