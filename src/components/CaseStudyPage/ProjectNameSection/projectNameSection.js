import React from "react"

import ScrollDown from "../../DecorationElements/scrollDown"

import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import { 
    ProjectNameWrapper,
    ProjectNameTitle,
} from "../../../styles/ProjectPage/projectNameSection"

const ProjectNameSection = (props) => {  
  return (
  <>
  <ProjectNameWrapper id={props.anchorId}>
      <ProjectNameTitle>{props.data.tItle}</ProjectNameTitle>
      <ScrollDown margin="160px 0 0"/>
      <StainsBackground rotate="10deg" top="20%" left="-18%" height="600px"/>
      <StainsBackground rotate="-12deg" top="10%" left="10%" height="800px"/>
  </ProjectNameWrapper>
  </>
  )
}
  




export default ProjectNameSection