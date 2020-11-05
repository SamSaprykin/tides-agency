import React from "react"

import { Link } from "gatsby"

import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    SubscribeWrapper,
    SubscribeMarque,
    SubscribeForm,
    InputContainer,
    StyledInput,
    InputBorder,
    FormCta,
} from "../../../styles/IndexPage/subscribeSection"

import AnimParagraph from "../../animateParagraph"


const SubscribeSection = ({ }) => {
  
  return (
    <SubscribeWrapper>
        <SubscribeMarque>
          Insights - Insights - Insights - Insights - 
          Insights - Insights - Insights - 
          Insights - Insights - Insights
        </SubscribeMarque>
        <SubscribeForm>
          <FormCta>
            <h5>
              <AnimParagraph>
                Don't miss out and join  <br />
                our monthly insights
              </AnimParagraph>
            </h5>
            
          </FormCta>
          <InputContainer>
            <StyledInput placeholder="Your E-mail" />
            <button>
              <TidesIcons type="arrowForm" />
            </button>
            <InputBorder />
          </InputContainer>
          
        </SubscribeForm>
    </SubscribeWrapper>
    
    
  )
}
  




export default SubscribeSection
