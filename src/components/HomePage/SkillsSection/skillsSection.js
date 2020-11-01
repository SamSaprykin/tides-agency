import React from "react"

import { Link } from "gatsby"

import TidesIcons from "../../DecorationElements/tidesIcons"

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
} from "../../../styles/IndexPage/skillsSection"

const SkillsSection = ({ }) => {
  
  return (
    <SkillsSectionContainer>
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
                        <TidesIcons type="arrowButton" />
                    </SkillsSectionCtaButton>
                </SkillsSectionCtaWrapper>
                <SkillSectionPlanetsWrapper>
                        <SkillSectionSunWrapper>
                            <SkillSectionSun src="/sun.png"/>
                        </SkillSectionSunWrapper>
                        <SkillSectionMoonWrapper>
                            <SkillSectionMoon src="/moon.png"/>
                        </SkillSectionMoonWrapper>
                </SkillSectionPlanetsWrapper>
        </SkillsSectionWrapper>
    </SkillsSectionContainer>

    
  )
}
  




export default SkillsSection

