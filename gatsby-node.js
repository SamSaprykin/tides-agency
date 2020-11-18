const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const caseStudyPage = new Promise((resolve, reject) => {
      graphql(`
        query {
          allContentfulCaseStudyPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        
        result.data.allContentfulCaseStudyPage.edges.forEach((edge, index) => {
          createPage({
            path: `/case-study/${edge.node.slug}`,
            component: path.resolve(`./src/templates/case-study.js`),
            context: {
              slug: `${edge.node.slug}`,
            },
          })
        })
        resolve()
      })
    })

    const contenfulPage = new Promise((resolve, reject) => {
      graphql(`
        query {
          allContentfulContentfulPage {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        
        result.data.allContentfulContentfulPage.edges.forEach((edge, index) => {
          createPage({
            path: edge.node.slug,
            component: path.resolve(`./src/templates/site-page.js`),
            context: {
              slug: `${edge.node.slug}`,
            },
          })
        })
        resolve()
      })
    })
  
    return Promise.all([
      contenfulPage,
      caseStudyPage
    ])
  }
