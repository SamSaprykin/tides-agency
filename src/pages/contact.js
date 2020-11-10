import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroCtaSection from "../components/ContactPage/HeroCtaSection/heroCtaSection";
import FormSection from "../components/ContactPage/FormSection/formSection"


const Contact = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroCtaSection />
      <FormSection />
  </Layout>
)

export default Contact