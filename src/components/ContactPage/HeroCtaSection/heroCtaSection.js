import React from "react"

import ScrollDown from "../../DecorationElements/scrollDown"
import TidesIcons from "../../DecorationElements/tidesIcons"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import { 
    HeroCtaWrapper,
    HeroCtaTitle,
    HeroCtaCta,
    TextBlue,
} from "../../../styles/ContactPage/sectionHeroCta"

const HeroCtaSection = ({ }) => {
  
  return (
  <>
  <HeroCtaWrapper>
      <HeroCtaTitle>Let's start <TextBlue><span>Your</span> <TidesIcons type="waveTextDecoration" className="wave"/></TextBlue> project <h5>together!</h5></HeroCtaTitle>
      <ScrollDown margin="64px 0 0"/>
      <HeroCtaCta>Fill in the form, or, if you prefer, send us an email</HeroCtaCta>
  </HeroCtaWrapper>
  <StainsBackground rotate="10deg" top="20%" left="-14%" height="600px"/>
  </>
  )
}
  




export default HeroCtaSection
