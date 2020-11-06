import React from "react"
import GlitchClip from 'react-glitch-effect/core/Clip';
import ScrollDown from "../../DecorationElements/scrollDown"
import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    QuoteLayout,
    ContentContainer,
    QuoteHeader,
    QuoteTitle,
    QuoteText,
    QuoteAuthorWrapper,
    QuoteAuthorName,
    QuoteAuthorIcon,
} from "../../../styles/AbouUsPage/sectionQuote"



const SectionQuote = ({ }) => {
  return (
  <QuoteLayout>
    <QuoteHeader>
        <TidesIcons type="moonsGroup" />
        <QuoteTitle>we make any digital dream come true</QuoteTitle>
    </QuoteHeader>
    <ContentContainer>
      
        <QuoteText>
           <span>TIDES <TidesIcons type="bigQuote" /></span> was formed because
           we saw too many companies  struggle
           with marketing, design, 	&amp; development 
           stragies.
           <TidesIcons type="waveTextDecoration" className="wave"/>
        </QuoteText>
        <QuoteAuthorWrapper>
          <QuoteAuthorIcon>
            <img src="/Jonathan-icon.png" />
          </QuoteAuthorIcon>
          <QuoteAuthorName>
            <TidesIcons type="signatureJonathan" />
          </QuoteAuthorName>
        </QuoteAuthorWrapper>
    </ContentContainer>
    <ScrollDown margin='70px 0 0'/>
    
  </QuoteLayout>
  )
}
  




export default SectionQuote