import React from "react"

import ScrollDown from "../../DecorationElements/scrollDown"
import TidesIcons from "../../DecorationElements/tidesIcons"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import { 
    HeroCtaWrapper,
    HeroCtaTitle,
    HeroCtaCta,
} from "../../../styles/ContactPage/sectionHeroCta"

const HeroCtaSection = (props) => {

  return (
  <>
  <HeroCtaWrapper id={props.anchorId}>
      {
          props.data.heroTitleContactPage && (
            <HeroCtaTitle>
              <div dangerouslySetInnerHTML={{ __html: `<div> ${props.data.heroTitleContactPage} </div>` }} />
              <TidesIcons type="waveTextDecoration" className="wave"/>
            </HeroCtaTitle>
          )
      }
      <ScrollDown margin="64px 0 0"/>
      {
        props.data.heroCta && (
          <HeroCtaCta>{props.data.heroCta}</HeroCtaCta>
        )
      }
  </HeroCtaWrapper>
  <StainsBackground rotate="10deg" top="20%" left="-14%" height="600px"/>
  </>
  )
}
  




export default HeroCtaSection
