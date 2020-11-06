import React, { useState } from 'react';
import { Link } from "gatsby"

import TidesIcons from "../../DecorationElements/tidesIcons"
import { useScrollPosition } from "../../../hooks/useScroll"

import { 
  SkillsSectionWrapper,
  SkillsSectionTitle,
  SkillsSectionDescription,
  SkillsSectionCta,
  SkillsSectionCtaWrapper,
  SkillsSectionCtaButton,
  SkillsSectionContainer,
  SkillSectionPlanetsWrapper,
  SkillSectionSun,
  SkillSectionMoon,
  SkillSectionMoonWrapper,
  SkillSectionSunWrapper,
  SmallPlanet,
} from "../../../styles/IndexPage/skillsSection"

import AnimParagraph from "../../animateParagraph"

const SkillsSection = ({ }) => {
    const [position, setPostition] = useState(null)
    useScrollPosition(({ prevPos, currPos }) => {
        setPostition(currPos.y)
      },
      [position]
    );
    
  return (
    <SkillsSectionContainer >
        <SkillsSectionWrapper>
                <SkillsSectionTitle>
                  <AnimParagraph>
                      Did you know?
                  </AnimParagraph>
                </SkillsSectionTitle>
                <SkillsSectionDescription>
                    <AnimParagraph>
                      Tides is a documented world phenonomen. Similarly, <br />
                      the people of <span> Tides </span> are a force to be weckonend with.
                   </AnimParagraph>
                </SkillsSectionDescription>
                
                
                  <AnimParagraph>
                    <Link to="/about-us">
                      <SkillsSectionCtaWrapper>
                        <SkillsSectionCta>
                            Learn more about the skills of the team
                        </SkillsSectionCta>
                        <SkillsSectionCtaButton>
                          
                            <TidesIcons type="arrowButton" fill="#FFCC00"/>
                          
                        </SkillsSectionCtaButton>
                      </SkillsSectionCtaWrapper>
                    </Link>  
                  </AnimParagraph>
                
                
               
                <SkillSectionPlanetsWrapper>
                        <SkillSectionSunWrapper>
                            <SkillSectionSun src="/sun.svg"/>
                        </SkillSectionSunWrapper>
                        <SkillSectionMoonWrapper>
                            <SkillSectionMoon  src="/moon.svg"/>
                            <SmallPlanet  position={position} src="/planet.svg" />
                        </SkillSectionMoonWrapper>
                </SkillSectionPlanetsWrapper>
        </SkillsSectionWrapper>
    </SkillsSectionContainer>

    
  )
}


  




export default SkillsSection

