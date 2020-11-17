import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/* About us components */
import SectionQuote from "../components/AboutUsPage/SectionQuote/sectionQuote"
import SectionOurStory from "../components/AboutUsPage/SectionOurStory/sectionOurStory"
import SectionTeam from "../components/AboutUsPage/SectionTeam/sectionTeam"
import SectionDifferent from "../components/AboutUsPage/SectionDifferent/sectionDifferent"
/* Contact components */
import HeroCtaSection from "../components/ContactPage/HeroCtaSection/heroCtaSection"
import FormSection from "../components/ContactPage/FormSection/formSection"
/* Index page components */
import HeroSection from "../components/HomePage/HeroSection/heroSection"
import AboutSection from "../components/HomePage/AboutSection/aboutSection"
import FinishedProjects from "../components/HomePage/FinishedProjects/finishedProjects"
import SkillsSection from "../components/HomePage/SkillsSection/skillsSection"
import InsightsSetion from "../components/HomePage/InsightsSection/insightsSection"
import SubscribeSection from "../components/HomePage/SubscribeSection/subscribeSection"

const SitePage = props => {
  const components = props.data.contentfulContentfulPage.components
  
  return (
    <Layout>
      <SEO title="Home" />
      {components?.map(ele => {
          const type = ele.__typename;
          if (type === 'ContentfulHeroIndexPage') {
            return (
              <HeroSection data={ele} />
            )
          } else if (type === 'ContentfulAboutIndexPage') {
            return <AboutSection data={ele}/> ;
          } else if (type === 'ContentfulFinishedProjectsIndexPage') {
            return <FinishedProjects data={ele}/> ;
          } else if (type === 'ContentfulSkillsIndexPage') {
            return <SkillsSection data={ele}/> ;
          } else if (type === 'ContentfulLatestInsight') {
            return <InsightsSetion data={ele}/> ;
          } else if (type === 'ContentfulSubscribeIndexPage') {
            return <SubscribeSection data={ele}/> ;
          } else if (type === 'ContentfulHeroAboutPage') {
            return <SectionQuote data={ele}/> ;
          } else if (type === 'ContentfulOurStoryAboutPage') {
            return <SectionOurStory data={ele} />;
          } else if (type === 'ContentfulTeamAboutPage') {
            return <SectionTeam data={ele} />;
          } else if (type === 'ContentfulDifferencesAboutUsPage') {
            return <SectionDifferent data={ele} />;
          } else if (type === 'ContentfulHeroContactPage') {
            return <HeroCtaSection data={ele} />;
          } else if (type === 'ContentfulContactFormComponent') {
            return <FormSection data={ele} />;
          } 
       })} 
    </Layout>
  )
}


export default SitePage



export const WebsitePageQuery = graphql`
query WebsitePageQuery($slug: String!) {
  contentfulContentfulPage(slug: { eq: $slug }) {
    id
    slug
    components {
      ... on ContentfulHeroAboutPage {
        id
        quoteAuthorName
        quoteText {
          quoteText
        }
        quoteAuthorIcon {
          fluid(maxWidth: 200) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      ... on ContentfulOurStoryAboutPage {
        id
        description {
          description
        }
        tItle
        information {
          information
        }
      }
      ... on ContentfulTeamAboutPage {
        id
        employeesList {
          icon {
            file {
              url
            }
          }
          position
        }
        tItle
        information {
          information
        }
      }
      ... on ContentfulDifferencesAboutUsPage {
        id
        title
        description {
          description
        }
        differenceItem {
          itemName
          itemDescription {
            itemDescription
          }
        }
      }
      ... on ContentfulHeroContactPage {
        heroCta
        heroTitleContactPage
      }
      ... on ContentfulContactFormComponent {
        formTitle
        inputEmail
        inputCompany
        inputName
        detailsTextArea
        servicesCheboxes
      }
      ... on ContentfulHeroIndexPage {
        textIndexHero
      }
      ... on ContentfulAboutIndexPage {
        textAboutTides {
          textAboutTides
        }
        marqueeAbout {
          marqueeList
          marqueeRunnerText
          titleMarquee
        }
      }
      ... on ContentfulFinishedProjectsIndexPage {
        tItle
        description {
          description
        }
        information {
          information
        }
        projectsItem {
          workTypes
          year
          linkTo
          icon {
            file {
              url
            }
          }
        }
      }
      ... on ContentfulSkillsIndexPage {
        callToAction
        tItle
        descriptionText {
          descriptionText
        }
      }
      ... on ContentfulLatestInsight {
        id
        title
      }
      ... on ContentfulSubscribeIndexPage { 
        runnerText
        titleSubscribeForm {
          titleSubscribeForm
        }
      }
    }
  }
}
`

