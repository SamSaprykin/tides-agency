import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ShapeIndex from "../components/DecorationElements/shapeIndex"

import HeroSection from "../components/HomePage/HeroSection/heroSection"


const IndexPage = () => (
  <Layout>
    
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroSection />
     
  </Layout>
)

export default IndexPage
