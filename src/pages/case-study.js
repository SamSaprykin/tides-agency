import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectNameSection from "../components/CaseStudyPage/ProjectNameSection/projectNameSection"
import AboutProjectSection from "../components/CaseStudyPage/AboutProjectSection/aboutProjectSection"
import ServicesProjectSection from "../components/CaseStudyPage/ServicesProjectSection/servicesProjectSection"
import GalleryProjectSection from "../components/CaseStudyPage/GalleryProjectSection/galleryProjectSection"
import AuthorsProjectSection from "../components/CaseStudyPage/AuthorsProjectSection/authorsProjectSection"

const CaseStudy = () => (
  <Layout>
      <SEO title="CaseStudy" keywords={[`gatsby`, `application`, `react`]} />
      <ProjectNameSection />
      <AboutProjectSection />
      <ServicesProjectSection />
      <GalleryProjectSection />
      <AuthorsProjectSection />
  </Layout>
)

export default CaseStudy