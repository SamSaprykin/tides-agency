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



const SectionDifferent = ({ }) => {
  return (
  <WrapperDifferent>
   <TitleDifferent>
       How we're different
   </TitleDifferent>
   <BorderElement />
   <ContentDifferent>
       <ContentHeader>
            <p>
                At our core, we're curious people. We firmly 
                believe curiosity can lead to invaluable insights 
                to shape your organization, product, or service.
            </p>
            <TidesIcons type="iconDiff" />
       </ContentHeader>
       <ContentItemsWrapper>
           <ContentItem>
               <span>Understand:</span>
               At our core, we're curious people.  We firmly believe 
               curiosity can lead to invaluable insights to shape your 
               organization, product, and/or service.
           </ContentItem>
           <ContentItem>
               <span>Bolster:</span>
               Our driving passion is to help create, strengthen, and 
               support your brand or product through strategy, marketing, 
               design &amp; development.
           </ContentItem>
           <ContentItem>
                <span>Equip:</span>
                Nothing makes us prouder and happier than to see teams 
                we work with grow, and feel confident to take
                on some their own strategic plans.  We're here to equip 
                you for the future.
           </ContentItem>
           <ContentItem>
                <span>Disrupt:</span>
                We're comfortable being different, taking risks, and pushing 
                you and teams to a certain level of discomfort.  Being a disruptor 
                isn't swimming upstream, it's breaking barriers, it's flying into 
                the unknown.
           </ContentItem>
       </ContentItemsWrapper>
   </ContentDifferent>
  </WrapperDifferent>
  )
}
  




export default SectionDifferent