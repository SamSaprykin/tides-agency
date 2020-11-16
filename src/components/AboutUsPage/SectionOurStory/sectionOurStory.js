import React from "react"

import TidesIcons from "../../DecorationElements/tidesIcons"
import BorderElement from "../../DecorationElements/borderElement"
import StainsBackgrounds from "../../DecorationElements/stainsBackgrounds"
import { 
    WrapperStory,
    ContainerStory,
    TitleStory,
    ContentWrapper,
    Description,
    Information,
} from "../../../styles/AbouUsPage/sectionOurStory"

import AnimBorder from "../../borderAnimation"
import AnimSmall from  "../../animSmall"
import AnimParagraph from "../../animateParagraph"

const SectionOurStory = ({data}) => {
  
  return (
  <WrapperStory>
    <ContainerStory>
        {
          data.tItle && (
            <TitleStory>
              <AnimSmall>
                    {data.tItle}
              </AnimSmall>
            </TitleStory>
          )
        }
        
        <AnimBorder>
          <BorderElement padding="19px 0 0"/>
        </AnimBorder>
        
        <ContentWrapper>
            {
              data.information && (
                <Description>
                  <AnimParagraph>
                      <div dangerouslySetInnerHTML={{ __html: `<div> ${data.information.information} </div>` }} />
                  </AnimParagraph>
                  <TidesIcons type="smallMoom" />
                </Description>
              )
            }
            
            {
              data.description && (
                <Information>
                  <AnimParagraph>
                    <div dangerouslySetInnerHTML={{ __html: `<div> ${data.description.description} </div>` }} />
                  </AnimParagraph>
                </Information>
              )
            }
           
        </ContentWrapper>
    </ContainerStory>
    <StainsBackgrounds  top="40%" left="-10%" height="600px"/>
  </WrapperStory>
  )
}
  




export default SectionOurStory