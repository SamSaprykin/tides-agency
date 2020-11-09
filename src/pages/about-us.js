import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionQuote from "../components/AboutUsPage/SectionQuote/sectionQuote"
import SectionOurStory from "../components/AboutUsPage/SectionOurStory/sectionOurStory"
import SectionTeam from "../components/AboutUsPage/SectionTeam/sectionTeam"
import SectionDifferent from "../components/AboutUsPage/SectionDifferent/sectionDifferent"


const AboutUs = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SectionQuote />
      <SectionOurStory />
      <SectionTeam />
      <SectionDifferent />
  </Layout>
)

export default AboutUs
