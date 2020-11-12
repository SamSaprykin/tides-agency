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

const AboutProjectSection = ({ }) => {
  
  return (
  <AboutProjectWrapper>
    <AboutProjectTitle>About</AboutProjectTitle>
    <BorderElement />
    <AboutProjectContent>
      <AboutProjectInfo>
        <TitleContent>
          <h5>Launch Date</h5>
          <span>2020</span>
        </TitleContent>
        <TidesButton callToAction="visit website" small="true"/>    
      </AboutProjectInfo>
      <AboutProjectDescription>
          <p>
            Clearview Capital is a private investment firm specializing in control and non-control 
            investments of North American companies with operating profits of $3-$20 million. 
            The firm's investment professionals have a long track record of completing transactions 
            and of working collaboratively with management to create and realize value.
          </p>
      </AboutProjectDescription>
    </AboutProjectContent>
  </AboutProjectWrapper>
  )
}
  




export default AboutProjectSection