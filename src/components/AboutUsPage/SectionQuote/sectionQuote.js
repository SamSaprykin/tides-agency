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



const SectionQuote = ({data}) => {
  
  return (
  <QuoteLayout>
    <QuoteHeader>
        <TidesIcons type="moonsGroup" />
        <QuoteTitle>we make any digital dream come true</QuoteTitle>
    </QuoteHeader>
    <ContentContainer>
          <GlitchEffect>
              {
                data.quoteText && (
                  <QuoteText>
                    <div dangerouslySetInnerHTML={{ __html: `<div> ${data.quoteText.quoteText} </div>` }} />
                    <TidesIcons type="waveTextDecoration" className="wave"/>
                    <TidesIcons type="bigQuote" />
                  </QuoteText>
                )
              }
          </GlitchEffect>
        <QuoteAuthorWrapper>
              {
                data.quoteAuthorIcon && (
                  <QuoteAuthorIcon>
                    <img src="/Jonathan-icon.png" />
                  </QuoteAuthorIcon>
                )
              }
              {
                data.quoteAuthorName && (
                  <QuoteAuthorName>
                    <TidesIcons type="signatureJonathan" />
                  </QuoteAuthorName>
                )
              }
        </QuoteAuthorWrapper>
    </ContentContainer>
    <ScrollDown margin='70px 0 0'/>
  </QuoteLayout>
  )
}
  




export default SectionQuote
