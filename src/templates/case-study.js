import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectNameSection from "../components/CaseStudyPage/ProjectNameSection/projectNameSection"
import AboutProjectSection from "../components/CaseStudyPage/AboutProjectSection/aboutProjectSection"
import ServicesProjectSection from "../components/CaseStudyPage/ServicesProjectSection/servicesProjectSection"
import GalleryProjectSection from "../components/CaseStudyPage/GalleryProjectSection/galleryProjectSection"
import AuthorsProjectSection from "../components/CaseStudyPage/AuthorsProjectSection/authorsProjectSection"

const CaseStudy = props => {
  const components = props.data.contentfulCaseStudyPage.components
  
  return (
    <Layout>
      <SEO title="CaseStudy" keywords={[`gatsby`, `application`, `react`]} />
      {components?.map(ele => {
          const type = ele.__typename;
          if (type === 'ContentfulTitleSectionCaseStudy') {
            return (
              <ProjectNameSection data={ele}/>
            )
          } else if (type === 'ContentfulAboutSectionCaseStudy') {
            return  <AboutProjectSection data={ele} /> ;
          } else if (type === 'ContentfulServicesSectionCaseStudy') {
            return  <ServicesProjectSection data={ele} /> ;
          } else if (type === 'ContentfulGallerySectionCaseStudy') {
            return  <GalleryProjectSection data={ele} /> ;
          } else if (type === 'ContentfulProjectTeamCaseStudy') {
            return  <AuthorsProjectSection data={ele} /> ;
          } 
       })} 
    </Layout>   
  )
}


export default CaseStudy

export const CaseStudyPageQuery = graphql`
  query CaseStudyPageQuery($slug: String!) {
    contentfulCaseStudyPage(slug: { eq: $slug }) {
      id
      slug
        components {
          ... on ContentfulAboutSectionCaseStudy {
            siteLink
            id
            launchDate(formatString: "")
            description {
              description
            }
          }
          ... on ContentfulGallerySectionCaseStudy {
            id
            galleryItem {
              marqueeText
              workTypeImages {
                description
                file {
                  url
                }
              }
            }
          }
          ... on ContentfulProjectTeamCaseStudy {
            teamMember
          }
          ... on ContentfulServicesSectionCaseStudy {
            id
            projectAwwards
            services
            mainImage {
              fluid(maxWidth: 1200) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
          ... on ContentfulTitleSectionCaseStudy {
            id
            tItle
          }
        } 			
      }
    }
`