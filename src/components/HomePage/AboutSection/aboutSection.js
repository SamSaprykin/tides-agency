import React from "react"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import MarqueeComponent from "./marqueeComponent"

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
import useWindowSize from "../../../hooks/useWindowSize"


const AboutSection = ({data}) => {
  const size = useWindowSize();
  return (
  <WrapperAbout>
    <TextSectionAbout>
        <AboutDescription>
                <AnimHighParagraph>
                    <div dangerouslySetInnerHTML={{ __html: `<div> ${data.textAboutTides.textAboutTides} </div>` }} />
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
                {data.marqueeAbout.map((marque,index) => {
                    return (
                      <MarqueeComponent data={marque} id={index} size={size.width} />
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

