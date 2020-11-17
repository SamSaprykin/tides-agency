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

const SkillsSection = ({ data}) => {
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
                {data.tItle}
            </AnimParagraph>
          </SkillsSectionTitle>
          <SkillsSectionDescription>
              <AnimParagraph>
                <div dangerouslySetInnerHTML={{ __html: `<div> ${data.descriptionText.descriptionText} </div>` }} />
              </AnimParagraph>
          </SkillsSectionDescription>
          
          <AnimParagraph>
            <Link to="/about-us">
              <SkillsSectionCtaWrapper>
                <SkillsSectionCta>
                    {data.callToAction}
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

