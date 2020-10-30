import React  from "react"
import styled from "styled-components"

import StainsBackground from "../../DecorationElements/stainsBackgrounds"

import "./aboutSection.css"

import { 
    WrapperAbout,
    TextSectionAbout,
    AboutDescription,
    ImpactAreasAbout,
    ImpactAreasTitle,
    ImpactAreasList,
} from "../../../styles/IndexPage/aboutSection"

const AboutSection = ({ }) => {
  
  return (
  <WrapperAbout>
    <TextSectionAbout>
        <AboutDescription>
            <p>
                <span>TIDES</span> is a boutique digital solutions agency with an innate ability to grasp complex 
                problems and build value through technology, creativity, and good ole’ fashion hard work. 
                Let’s disrupt and impact change for the better.
            </p>
        </AboutDescription>
        <ImpactAreasAbout className="menu">
            <ImpactAreasTitle>
                impact areas
            </ImpactAreasTitle>
            <ImpactAreasList>
                <li className="menu__item">
                    <h5 className="menu__item-link">strategy</h5>
                    <div className="marquee">
                        <button className="button-expand">+</button>
                        <div className="marquee__inner" aria-hidden="true">
                            <span>strategy</span>
                            <span>strategy</span>
                            <span>strategy</span>
                            <span>strategy</span>
                            <span>strategy</span>
                            <span>strategy</span>
                            <span>strategy</span>
                            <span>strategy</span>
                        </div>
				    </div>
                </li>
                <li className="menu__item">
                    <h5 className="menu__item-link">design</h5>
                    <div className="marquee">
                        <button className="button-expand">+</button>
                        <div className="marquee__inner" aria-hidden="true">
                            <span>design</span>
                            <span>design</span>
                            <span>design</span>
                            <span>design</span>
                            <span>design</span>
                            <span>design</span>
                            <span>design</span>
                            <span>design</span>
                        </div>
				    </div>
                </li>
                <li className="menu__item">
                    <h5 className="menu__item-link">marketing</h5>
                    <div className="marquee">
                        <button className="button-expand">+</button>
                        <div className="marquee__inner" aria-hidden="true">
                            <span>marketing</span>
                            <span>marketing</span>
                            <span>marketing</span>
                            <span>marketing</span>
                            <span>marketing</span>
                            <span>marketing</span>
                            <span>marketing</span>
                            <span>marketing</span>
                        </div>
				    </div>
                </li>
                <li className="menu__item">
                    <h5 className="menu__item-link">development</h5>
                    <div className="marquee">
                        <button className="button-expand">+</button>
                        <div className="marquee__inner" aria-hidden="true">
                            <span>development</span>
                            <span>development</span>
                            <span>development</span>
                            <span>development</span>
                            <span>development</span>
                            <span>development</span>
                            <span>development</span>
                            <span>development</span>
                        </div>
				    </div>
                </li>
            </ImpactAreasList>
        </ImpactAreasAbout>
    </TextSectionAbout>
    <StainsBackground top="0" left="0" height="600px" />
    <StainsBackground top="82%" left="40%" height="600px" />
  </WrapperAbout>
  )
}
  




export default AboutSection
