import React from "react"

import { Link } from "gatsby"

import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    SubscribeWrapper,
    SubscribeMarque,
    SubscribeForm,
    InputContainer,
    StyledInput,
    FormCta,
} from "../../../styles/IndexPage/subscribeSection"

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
            Don't miss out and join  <br />
            our monthly insights
          </FormCta>
          <InputContainer>
            <StyledInput placeholder="Yout E-mail" />
            <button>
              <TidesIcons type="arrowForm" />
            </button>
          </InputContainer>
          
        </SubscribeForm>
    </SubscribeWrapper>
    
    
  )
}
  




export default SubscribeSection
