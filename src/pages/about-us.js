import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionQuote from "../components/AboutUsPage/SectionQuote/sectionQuote"
import SectionOurStory from "../components/AboutUsPage/SectionOurStory/sectionOurStory"
import SectionForces from "../components/AboutUsPage/SectionForces/sectionForces"
import SectionDifferent from "../components/AboutUsPage/SectionDifferent/sectionDifferent"

const AboutUs = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SectionQuote />
      <SectionOurStory />
      <SectionForces />
      <SectionDifferent />
  </Layout>
)

export default AboutUs
