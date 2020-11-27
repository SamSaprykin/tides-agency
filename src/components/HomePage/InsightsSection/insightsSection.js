import React from "react";

import { 
    InsightsSectionWrapper,
    ContentWrapper,
    InsightsTitle,
    InsightsContainerInformation,
    InsightsQuote,
    InsightsDescription,
    ImageContainer,
    InsightsMonth,
    PostTitle,
    WrapInform,
    Column,
} from "../../../styles/IndexPage/insightsSection"

import AnimParagraph from "../../animateParagraph"
import AnimBorder from "../../borderAnimation"
import AnimSmall from "../../animSmall"
import BorderElement from "../../DecorationElements/borderElement"

const InsightsSetion = ({data}) => {
    
  return (
    <InsightsSectionWrapper>
      <AnimBorder>
        <BorderElement padding="0 0 30px"/>
      </AnimBorder>
      <ContentWrapper>
        <InsightsTitle>
            <AnimParagraph>
              {data.title}
            </AnimParagraph>
        </InsightsTitle>
        <AnimSmall delay=".7">
          <InsightsMonth>
            November Edition
          </InsightsMonth>
        </AnimSmall>
        <AnimSmall delay=".7">
          <PostTitle>
              GenZ, the Super Creatives
          </PostTitle>
        </AnimSmall>
        
      </ContentWrapper>
      
      <InsightsContainerInformation >
            <WrapInform>
                <Column>
                    <ImageContainer className="insights-container">
                        <AnimParagraph>
                          <img src="/insights_image.png" alt="gez z" />
                        </AnimParagraph>
                    </ImageContainer>
                    <InsightsDescription>
                        <AnimParagraph>
                          <div> Meet the gen Z Super Creatives: the supercharged multidisciplinary future of creative talent. And your new consumers. <br />  <br />More than half of gen Z(51%) say their generation is more creative than previous generations, according to a 2019 study conducted in the United States and United Kingdom by JWT Intelligence </div>
                        </AnimParagraph>
                    </InsightsDescription>
                </Column>
                <Column>
                    <InsightsQuote>
                        <AnimParagraph>
                          "gen z are absolutely more creative, but it's more utilitarian than other generations."
                        </AnimParagraph>
                    </InsightsQuote> 
                </Column>
            </WrapInform>
      </InsightsContainerInformation>
    </InsightsSectionWrapper>
  )
}
  




export default InsightsSetion