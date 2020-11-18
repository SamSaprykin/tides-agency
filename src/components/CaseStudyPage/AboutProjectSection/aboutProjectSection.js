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
        <TidesButton callToAction="visit website" small="true"/>    
      </AboutProjectInfo>
      <AboutProjectDescription>
          <p>
            {data.description.description}
          </p>
      </AboutProjectDescription>
    </AboutProjectContent>
  </AboutProjectWrapper>
  )
}
  




export default AboutProjectSection