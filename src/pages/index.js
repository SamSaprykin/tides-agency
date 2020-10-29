import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import ShapeIndex from "../components/DecorationElements/shapeIndex"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2">Page 2</Link>
      
    </Container>
    <ShapeIndex></ShapeIndex>
  </Layout>
)

export default IndexPage
