import { graphql, useStaticQuery } from "gatsby"

const useLatestProjects = () => {
  const { allContentfulCaseStudyPage } = useStaticQuery(
    graphql`
    query LatestProjects {
        allContentfulCaseStudyPage(limit: 5, sort: {fields: createdAt}) {
          edges {
            node {
              id
              slug
              iconCaseStudy {
                file {
                  url
                }
              }
              components {
                ... on ContentfulAboutSectionCaseStudy {
                  launchDate(formatString: "")
                }
                ... on ContentfulServicesSectionCaseStudy {
                  services
                }
              }
            }
          }
        }
      }
    `
  )
  return allContentfulCaseStudyPage?.edges
}
export default useLatestProjects