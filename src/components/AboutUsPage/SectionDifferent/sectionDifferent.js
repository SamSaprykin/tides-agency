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
import AnimBorder from "../../borderAnimation"

const SectionDifferent = ({data}) => {
  
  return (
    <WrapperDifferent>
        {
            data.title && (
                <TitleDifferent>
                    <AnimHighParagraph>
                        {data.title}
                    </AnimHighParagraph>
                </TitleDifferent>
            )
        }
        <AnimBorder>
            <BorderElement />
        </AnimBorder>
        
    <ContentDifferent>
        {
            data.description && (
                <ContentHeader>
                    <p>
                        <AnimParagraph>
                            {data.description.description}
                        </AnimParagraph>
                    </p>
                    <TidesIcons type="iconDiff" />
                </ContentHeader>
            )
        }
        {
            data.differenceItem && (
                <ContentItemsWrapper>
                    {
                        data.differenceItem.map((item,i) => {
                            return (
                                <ContentItem>
                                    <AnimParagraph>
                                            <span>{item.itemName}:</span>
                                            {item.itemDescription.itemDescription}
                                    </AnimParagraph>
                                </ContentItem>
                            )
                        })
                    }
                    
                </ContentItemsWrapper>
            )
        }
       
    </ContentDifferent>
    </WrapperDifferent>
  )
}
  




export default SectionDifferent