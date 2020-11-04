import styled from "styled-components"

export const InsightsSectionWrapper = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
    padding:30px 0 50px;
    border-top:1px solid #E8ECF3;
    border-bottom:1px solid #E8ECF3;
    margin:0 auto;
    max-width:1002px;
    &:after {
        content: "";
        position: absolute;
        width: 900px;
        height: 550px;
        background: #f2f2f6;
        right: 0;
        bottom: 0;
        opacity: 0.8;
        z-index: -10;
      }
      .testimonial-container {
        max-width:1002px;
        height: 600px;
        position: relative;
        margin-top:100px;
        .arrows {
          position: absolute;
          display: flex;
          width: 100px;
          align-items: center;
          justify-content: center;
          bottom: 0;
          top: 0;
          cursor: pointer;
          border-radius: 8px;
          transition: 0.3s ease-in-out;
          
          &.right {
            right: 0;
          }
        }
        .inner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          margin:0 auto;
          max-width:1002px;
          .t-image {
            width: 1002px;
            height: 560px;
            display: flex;
            justify-content: center;
            align-items: center;
           
            ul {
              display: flex;
              position: absolute;
              overflow: hidden;
              height: 560px;
              width: 1002px;
              list-style:none;
              flex-direction:column;
              li {
                height: 560px;
                width: 1002px;
                img {
                  height: 560px;
                  width: 1002px;
                }
              }
            }
          }
          .t-content {
            width: 500px;
            height: 600px;
            display: flex;
            align-items: center;
            ul {
              position: absolute;
              overflow: hidden;
              width: 500px;
              height: 400px;
            }
          }  
        }
      }
`

export const ContentWrapper = styled.div`
      display:flex;
      flex-direction:column;
      position:relative;
      width:100%;
      height:420px;
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
      p {
        position:absolute;
      }
`

export const InsightsButton = styled.button`
      background-color:transparent;
      width:70px;
      height:70px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      border-radius:100%;
      border:1px solid #E8ECF3;
      outline:none;
      margin-right:14px;
      margin-top:32px;
      :hover {
        border:1px solid #1A6AFF;
        svg {
            path {
                fill: #1A6AFF !important;
            }
        }
      }
`

export const InsightsContainerInformation = styled.div`
  overflow: hidden;  
`

export const InsightsButtons = styled.div`
    display:flex;
    flex-direction:row;
    position:relative;
    z-index:2;
    margin-top:180px;
    .left {
        transform: rotate(180deg);
    }
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
  position:absolute;
  margin-top:160px;
  top:0;
  opacity:0;
  :nth-of-type(1) {
    opacity:1;
  }
`

