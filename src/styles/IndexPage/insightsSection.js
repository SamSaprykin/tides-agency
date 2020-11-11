import styled from "styled-components"

export const InsightsSectionWrapper = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
    padding:0 0 50px;
    border-bottom:1px solid #E8ECF3;
    margin:0 auto;
    max-width:1002px;
   
      .insights-container {
        
      
      }
      
`

export const ContentWrapper = styled.div`
      display:flex;
      flex-direction:column;
      position:relative;
      width:100%;
      height:auto;
`

export const InsightsTitle = styled.h2`
      font-size:60px;
      line-height:116px;
      letter-spacing:0.05em;
      font-family:Verona Serial;
      color:#E8ECF3;
      text-transform:uppercase;
      font-weight:400;
      position:relative;
      overflow:hidden;
      height:116px;
      margin-bottom:24px;
      p {
        position:absolute;
      }
`



export const InsightsContainerInformation = styled.div`
  overflow: hidden;  
`




export const InsightsQuote = styled.h5`
    text-transform:uppercase;
    font-family: Bandeins Sans;
    font-size:28px;
    line-height:36px;
    color:#E8ECF3;
    font-weight:400;
    width:100%;
    max-width:400px;
    display:inline;
    
`

export const Column = styled.div`
    width:50%;
    margin:0 39px;
    :nth-of-type(1) {
      margin-left:0;
    }
    :nth-of-type(2) {
      margin-right:0;
    }
`

export const InsightsDescription = styled.p`
    font-size: 24px;
    line-height: 36px;
    color:#E8ECF3;
    font-family: Bandeins Sans;
    text-align:justify;
    font-weight:400;
    position:relative;
    overflow:hidden;
`

export const WrapInform = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:50px;
  opacity:0;
  :nth-of-type(1) {
    opacity:1;
  }
`

export const ImageContainer = styled.div`
  max-width:1002px;
  height: auto;
  position: relative;
  width:100%;
  p {
    width:100%;
    img {
      width:100%;
    }
  }
`

export const PostTitle = styled.h5`
  font-size:32px;
  line-height:40px;
  letter-spacing:0.05em;
  font-family:Verona Serial;
  color:#E8ECF3;
  text-transform:uppercase;
  font-weight:400;
  position:relative;
  overflow:hidden;
  margin-bottom:32px !important;
`

export const InsightsMonth = styled.div`
  font-size:17px;
  line-height:24px;
  font-family: Bandeins Sans;
  color: #FFCC00;
  margin-top:27px;
`

