import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionQuote from "../components/AboutUsPage/SectionQuote/sectionQuote"
import SectionOurStory from "../components/AboutUsPage/SectionOurStory/sectionOurStory"

const AboutUs = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SectionQuote />
      <SectionOurStory />
  </Layout>
)

export default AboutUs
