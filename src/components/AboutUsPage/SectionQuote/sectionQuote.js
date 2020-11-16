import React from "react"
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

import { GlitchEffect } from "../../../styles/glitchEffect"



const SectionQuote = ({ }) => {
  
  return (
  <QuoteLayout>
    <QuoteHeader>
        <TidesIcons type="moonsGroup" />
        <QuoteTitle>we make any digital dream come true</QuoteTitle>
    </QuoteHeader>
    <ContentContainer>
          <GlitchEffect>
            <QuoteText>
              <span>TIDES <TidesIcons type="bigQuote" /></span> was formed because
              we saw too many companies  struggle
              with marketing, design, 	&amp; development 
              strategies.
              <TidesIcons type="waveTextDecoration" className="wave"/>
            </QuoteText>
          </GlitchEffect>
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
