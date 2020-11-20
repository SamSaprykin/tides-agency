import React from "react"
import TidesButton from "../../DecorationElements/tidesButton"
import BorderElement from "../../DecorationElements/borderElement"
import { 
    AboutProjectWrapper,
    AboutProjectTitle,
    TitleContent,
    AboutProjectContent,
    AboutProjectInfo,
    AboutProjectDescription,
} from "../../../styles/ProjectPage/aboutProjectSection"

const AboutProjectSection = ({data}) => {
  
  return (
  <AboutProjectWrapper>
    <AboutProjectTitle>About</AboutProjectTitle>
    <BorderElement />
    <AboutProjectContent>
      <AboutProjectInfo>
        <TitleContent>
          <h5>Launch Date</h5>
          <span>{data.launchDate}</span>
        </TitleContent>
        {
            data.siteLink !== null && (
              <a href={data.siteLink} target="_blank" rel="noopener noreferrer" className="big-sizes-button">
                  <TidesButton callToAction="visit website" small="true"/>   
              </a> 
            )
        }
      </AboutProjectInfo>
      <AboutProjectDescription>
          <p>
            {data.description.description}
          </p>
      </AboutProjectDescription>
        {
            data.siteLink !== null && (
              <a href={data.siteLink} target="_blank" rel="noopener noreferrer" className="small-sizes-button">
                  <TidesButton callToAction="visit website" small="true"/>   
              </a> 
            )
        }
    </AboutProjectContent>
  </AboutProjectWrapper>
  )
}
  




export default AboutProjectSection