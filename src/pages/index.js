import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ShapeIndex from "../components/DecorationElements/shapeIndex"

import HeroSection from "../components/HomePage/HeroSection/heroSection"
import AboutSection from "../components/HomePage/AboutSection/aboutSection"
import FinishedProjects from "../components/HomePage/FinishedProjects/finishedProjects"
import SkillsSection from "../components/HomePage/SkillsSection/skillsSection"

const IndexPage = () => (
  <Layout>
    
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroSection />
      <AboutSection />
      <FinishedProjects />
      <SkillsSection />
  </Layout>
)

export default IndexPage
