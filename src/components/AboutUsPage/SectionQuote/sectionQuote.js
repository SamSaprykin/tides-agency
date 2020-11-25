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



const SectionQuote = (props) => {
  
  return (
  <QuoteLayout id={props.anchorId}>
    <QuoteHeader>
        <TidesIcons type="moonsGroup" />
        <QuoteTitle>we make any digital dream come true</QuoteTitle>
    </QuoteHeader>
    <ContentContainer>
          <GlitchEffect>
              {
                props.data.quoteText && (
                  <QuoteText>
                    <div dangerouslySetInnerHTML={{ __html: `<div> ${props.data.quoteText.quoteText} </div>` }} />
                    <TidesIcons type="waveTextDecoration" className="wave"/>
                    <TidesIcons type="bigQuote" className="quote"/>
                  </QuoteText>
                )
              }
          </GlitchEffect>
        <QuoteAuthorWrapper>
              {
                props.data.quoteAuthorIcon && (
                  <QuoteAuthorIcon>
                    <img src="/Jonathan-icon.png" />
                  </QuoteAuthorIcon>
                )
              }
              {
                props.data.quoteAuthorName && (
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
