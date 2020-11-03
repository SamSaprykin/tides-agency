import React, {useRef, useEffect} from "react"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import MarkueComponent from "./markueComponent"
import { useIntersection } from "react-use";
import { gsap, CSSPlugin } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./aboutSection.css"

import { 
    WrapperAbout,
    TextSectionAbout,
    AboutDescription,
    ImpactAreasAbout,
    ImpactAreasTitle,
    ImpactAreasList,
} from "../../../styles/IndexPage/aboutSection"

import {
    elementShow
} from '../../animate'

gsap.registerPlugin(ScrollTrigger)
const plugins = [ CSSPlugin ];

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
    const sectionRef = useRef(null);
    
    // All the ref to be observed
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "100px",
      threshold: 0.1
    });
  
    // Animation for fading in
    const fadeIn = element => {
      gsap.to(element, 1, {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3
        }
      });
    };
    // Animation for fading out
    const fadeOut = element => {
      gsap.to(element, 1, {
        opacity: 0,
        y: 60,
        ease: "power4.out"
      });
    };
  
    // checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio < 0.1 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");

    
  
  return (
  <WrapperAbout>
    <TextSectionAbout>
        <AboutDescription>
            <p className="fadeIn" ref={sectionRef}>
                <span>TIDES</span> is a boutique digital solutions agency with an innate ability to grasp complex 
                problems and build value through technology, creativity, and good ole’ fashion hard work. 
                Let’s disrupt and impact change for the better.
            </p>
        </AboutDescription>
        <ImpactAreasAbout className="menu">
            <ImpactAreasTitle >
                <p className="fadeIn">
                  impact areas
                </p>
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

