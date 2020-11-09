import React from "react"
import ScrollDown from "../../DecorationElements/scrollDown"
import TidesIcons from "../../DecorationElements/tidesIcons"
import { GlitchFilter } from '@pixi/filter-glitch';
import { Container, withFilters} from '@inlet/react-pixi';
 
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

const Filters = withFilters(Container, {
  glitch: GlitchFilter
});

const SectionQuote = ({ }) => {
  console.log(Filters)
  return (
  <QuoteLayout>
    <QuoteHeader>
        <TidesIcons type="moonsGroup" />
        <QuoteTitle>we make any digital dream come true</QuoteTitle>
    </QuoteHeader>
    <ContentContainer>
        <Filters glitch={{ slices:5,offset:100 }}>
          <GlitchEffect>
            <QuoteText>
              <span>TIDES <TidesIcons type="bigQuote" /></span> was formed because
              we saw too many companies  struggle
              with marketing, design, 	&amp; development 
              stragies.
              <TidesIcons type="waveTextDecoration" className="wave"/>
            </QuoteText>
          </GlitchEffect>
        </Filters>
       
        <QuoteAuthorWrapper>
          <QuoteAuthorIcon>
            <Filters glitch={{ slices:5,offset:100 }}>
              <img src="/Jonathan-icon.png" />
            </Filters>
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
