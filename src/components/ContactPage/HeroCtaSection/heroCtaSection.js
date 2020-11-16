import React from "react"

import ScrollDown from "../../DecorationElements/scrollDown"
import TidesIcons from "../../DecorationElements/tidesIcons"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import { 
    HeroCtaWrapper,
    HeroCtaTitle,
    HeroCtaCta,
} from "../../../styles/ContactPage/sectionHeroCta"

const HeroCtaSection = ({data}) => {

  return (
  <>
  <HeroCtaWrapper>
      {
          data.heroTitleContactPage && (
            <HeroCtaTitle>
              <div dangerouslySetInnerHTML={{ __html: `<div> ${data.heroTitleContactPage} </div>` }} />
              <TidesIcons type="waveTextDecoration" className="wave"/>
            </HeroCtaTitle>
          )
      }
      <ScrollDown margin="64px 0 0"/>
      {
        data.heroCta && (
          <HeroCtaCta>{data.heroCta}</HeroCtaCta>
        )
      }
  </HeroCtaWrapper>
  <StainsBackground rotate="10deg" top="20%" left="-14%" height="600px"/>
  </>
  )
}
  




export default HeroCtaSection
