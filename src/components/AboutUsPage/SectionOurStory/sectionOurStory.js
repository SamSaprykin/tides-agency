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

const SectionOurStory = ({ }) => {
  return (
  <WrapperStory>
    <ContainerStory>
        <TitleStory>
          <AnimSmall>
                Our Story
          </AnimSmall>
        </TitleStory>
        <AnimBorder>
          <BorderElement padding="19px 0 0"/>
        </AnimBorder>
        
        <ContentWrapper>
            <Description>
              <AnimParagraph>
                <p>
                  AFTER GETTING A <br /> BEHIND-THE-SCENES look into other companies marketing, 
                  design, and developmetn strategies, we knew there was opportunity to cause 
                  meaningful change.
                </p>
              </AnimParagraph>
              
              <TidesIcons type="smallMoom" />
            </Description>
            <Information>
              <AnimParagraph>
                <p>
                  It's normal for startups to have difficulty elevating their product. We help 
                  them with design and development services. Naturally, when private equity-backed 
                  companies want a competitive advantage in their industry. In this case, we develop 
                  a strategy to help their business align with technology at the forefront. <br /> <br />

                  Whatever happens, the tides continue to operate, supported by gravity. In the same way, 
                  no matter what happens in the world, we continue to help those with whom we feel a community 
                  of ideas. Because our driving passion is to help create, strengthen, and support your brand 
                  or product through strategy, marketing, design &amp; development.
                </p>
              </AnimParagraph>
              
            </Information>
        </ContentWrapper>
    </ContainerStory>
    <StainsBackgrounds  top="40%" left="-10%" height="600px"/>
  </WrapperStory>
  )
}
  




export default SectionOurStory