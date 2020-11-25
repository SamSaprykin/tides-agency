import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"

import Footer from "./footer"
import Header from "./header"

import Preloading from "./Preloading/preloading"
import CustomCursor from "../components/customCursor"

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Preloading />
        <GlobalStyle />
        <CustomCursor />
        <Header />
          <main>{props.children}</main>
        <Footer anchorId={props.anchorId}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
