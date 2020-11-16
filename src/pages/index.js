import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HomePage/HeroSection/heroSection"
import AboutSection from "../components/HomePage/AboutSection/aboutSection"
import FinishedProjects from "../components/HomePage/FinishedProjects/finishedProjects"
import SkillsSection from "../components/HomePage/SkillsSection/skillsSection"
import InsightsSetion from "../components/HomePage/InsightsSection/insightsSection"
import SubscribeSection from "../components/HomePage/SubscribeSection/subscribeSection"

const IndexPage = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroSection />
      
      <AboutSection />
      <FinishedProjects />
      <SkillsSection />
      <InsightsSetion />
      <SubscribeSection />
  </Layout>
)

export default IndexPage
