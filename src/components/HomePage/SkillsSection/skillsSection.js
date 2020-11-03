import React, { useState, useEffect } from 'react';
import { keyframes, css } from "styled-components"
import { Link } from "gatsby"

import TidesIcons from "../../DecorationElements/tidesIcons"
import { useScroll } from "../../../hooks/useScroll"

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

const SkillsSection = ({ }) => {
    
    
    let { scrollX, scrollY, scrollDirection } = useScroll();
   
  
  
 
  return (
    <SkillsSectionContainer >
        <SkillsSectionWrapper>
                <SkillsSectionTitle>Did you know?</SkillsSectionTitle>
                <SkillsSectionDescription>
                    Tides is a documented world phenonomen. Similarly, <br />
                    the people of <span> Tides </span> are a force to be weckonend with.
                </SkillsSectionDescription>
                <SkillsSectionCtaWrapper>
                    <SkillsSectionCta>
                        Learn more about the skills of the team
                    </SkillsSectionCta>
                    <SkillsSectionCtaButton>
                        <TidesIcons type="arrowButton" fill="#FFCC00"/>
                    </SkillsSectionCtaButton>
                </SkillsSectionCtaWrapper>
                <SkillSectionPlanetsWrapper>
                        <SkillSectionSunWrapper>
                            <SkillSectionSun src="/sun.png"/>
                        </SkillSectionSunWrapper>
                        <SkillSectionMoonWrapper>
                            <SkillSectionMoon  src="/moon.svg"/>
                            <SmallPlanet  position={scrollY} src="/planet.svg" />
                        </SkillSectionMoonWrapper>
                </SkillSectionPlanetsWrapper>
        </SkillsSectionWrapper>
    </SkillsSectionContainer>

    
  )
}


  




export default SkillsSection

