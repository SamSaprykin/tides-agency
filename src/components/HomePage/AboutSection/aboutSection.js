import React from "react"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import MarkueComponent from "./markueComponent"

import "./aboutSection.css"

import { 
    WrapperAbout,
    TextSectionAbout,
    AboutDescription,
    ImpactAreasAbout,
    ImpactAreasTitle,
    ImpactAreasList,
} from "../../../styles/IndexPage/aboutSection"

import AnimParagraph from "../../animateParagraph"
import AnimHighParagraph from "../../animateHeight"
import AnimBorder from "../../borderAnimation"
import BorderElement from "../../DecorationElements/borderElement"

const dataMarque = [
    {
        title:"strategy",
        innersElem: [
            "strategy -","strategy -","strategy -","strategy -","strategy -","strategy -","strategy -","strategy -","strategy -",
        ],
        descrItems: [
            "Research","Remote Design Sprints","Roadmaps","Insights","Brand Positioning","Processess"
        ],
        id: 0,
    },
    {
        title:"design",
        innersElem: [
            "design -","design -","design -","design -","design -","design -","design -","design -","design -",
        ],
        descrItems: [
            "Research","Remote Design Sprints","Roadmaps","Insights","Brand Positioning","Processess"
        ],
        id: 1,
    },
    {
        title:"marketing",
        innersElem: [
            "marketing -","marketing -","marketing -","marketing -","marketing -","marketing -","marketing -","marketing -","marketing -",
        ],
        descrItems: [
            "Research","Remote Design Sprints","Roadmaps","Insights","Brand Positioning","Processess"
        ],
        id: 2,
    },
    {
        title:"development",
        innersElem: [
            "development -","development -","development -","development -","development -","development -","development -","development -","strategy -",
        ],
        descrItems: [
            "Research","Remote Design Sprints","Roadmaps","Insights","Brand Positioning","Processess"
        ],
        id: 3,
    }
]

const AboutSection = ({ }) => {
    

    
  
  return (
  <WrapperAbout>
    <TextSectionAbout>
        <AboutDescription>
                <AnimHighParagraph>
                    <span>TIDES</span> is a boutique digital solutions agency with an innate ability to grasp complex 
                    problems and build value through technology, creativity, and good ole’ fashion hard work. 
                    Let’s disrupt and impact change for the better.
                </AnimHighParagraph>
        </AboutDescription>
        <ImpactAreasAbout className="menu">
            <ImpactAreasTitle >
                <AnimBorder>
                    <BorderElement padding="0 0 18px"/>
                </AnimBorder>
                <AnimParagraph>
                  impact areas
                </AnimParagraph>
            </ImpactAreasTitle>
            <ImpactAreasList>
                {dataMarque.map((marque) => {
                    return (
                      <MarkueComponent data={marque} />
                    )
                })}
            </ImpactAreasList>
        </ImpactAreasAbout>
    </TextSectionAbout>
    <StainsBackground top="0" left="0" height="600px" />
    <StainsBackground top="72%" left="40%" height="600px" />
  </WrapperAbout>
  )
}
  
export default AboutSection

