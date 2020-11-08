import React from "react"

import BorderElement from "../../DecorationElements/borderElement"
import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    WrapperDifferent,
    TitleDifferent,
    ContentDifferent,
    ContentHeader,
    ContentItemsWrapper,
    ContentItem,
} from "../../../styles/AbouUsPage/sectionDifferent"


import AnimParagraph from "../../animateParagraph"
import AnimHighParagraph from "../../animateHeight"

const SectionDifferent = ({ }) => {
  return (
  <WrapperDifferent>
   <TitleDifferent>
       <AnimHighParagraph>
         How we're different
       </AnimHighParagraph>
   </TitleDifferent>
   <BorderElement />
   <ContentDifferent>
       <ContentHeader>
            <p>
                <AnimParagraph>
                    At our core, we're curious people. We firmly 
                    believe curiosity can lead to invaluable insights 
                    to shape your organization, product, or service.
                </AnimParagraph>
            </p>
            <TidesIcons type="iconDiff" />
       </ContentHeader>
       <ContentItemsWrapper>
           <ContentItem>
               <AnimParagraph>
                    <span>Understand:</span>
                    At our core, we're curious people.  We firmly believe 
                    curiosity can lead to invaluable insights to shape your 
                    organization, product, and/or service.
               </AnimParagraph>
           </ContentItem>
           <ContentItem>
              <AnimParagraph>
                    <span>Bolster:</span>
                    Our driving passion is to help create, strengthen, and 
                    support your brand or product through strategy, marketing, 
                    design &amp; development.
               </AnimParagraph>
           </ContentItem>
           <ContentItem>
                <AnimParagraph>
                    <span>Equip:</span>
                    Nothing makes us prouder and happier than to see teams 
                    we work with grow, and feel confident to take
                    on some their own strategic plans.  We're here to equip 
                    you for the future.
                </AnimParagraph>
           </ContentItem>
           <ContentItem>
                <AnimParagraph>
                    <span>Disrupt:</span>
                    We're comfortable being different, taking risks, and pushing 
                    you and teams to a certain level of discomfort.  Being a disruptor 
                    isn't swimming upstream, it's breaking barriers, it's flying into 
                    the unknown.
                </AnimParagraph>
           </ContentItem>
       </ContentItemsWrapper>
   </ContentDifferent>
  </WrapperDifferent>
  )
}
  




export default SectionDifferent