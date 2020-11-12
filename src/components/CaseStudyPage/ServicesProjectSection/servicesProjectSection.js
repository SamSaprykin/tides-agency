import React from "react"

import ScrollDown from "../../DecorationElements/scrollDown"

import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import { 
    ServicesProjectWrapper,
    TitleImage,
    InformationWrapper,
    ServicesList,
    ServicesListWrapper,
    ListTitle,
    AwardsListWrapper,
    AwardsList,
} from "../../../styles/ProjectPage/servicesProjectSection"

const ServicesProjectSection = ({ }) => {
  
  return (
  <>
  <ServicesProjectWrapper>
    <TitleImage>
        <img src="/case_study/Title.png" alt="title_project" />
    </TitleImage>
    <InformationWrapper>
        <ServicesListWrapper>
            <ListTitle>
                Services
            </ListTitle>
            <ServicesList>
                <li>Branding</li>
                <li>Concept</li>
                <li>Webdesign</li>
                <li>UI/UX</li>
                <li>Interaction Design</li>
                <li>Development</li>
            </ServicesList>
        </ServicesListWrapper>
        <AwardsListWrapper>
            <ListTitle>
                Project Awwards
            </ListTitle>
            <AwardsList>
                <li>Awwwards - Site of the Day</li>
                <li>CSSDA - Special Kudos</li>
                <li>CSSLight - Site of the Day</li>
                <li>Awwards - Honorable Mention</li>
            </AwardsList>
        </AwardsListWrapper>
       
    </InformationWrapper>
    <StainsBackground rotate="12deg" top="30%" left="14%" height="800px"/>
  </ServicesProjectWrapper>
  </>
  )
}
  




export default ServicesProjectSection