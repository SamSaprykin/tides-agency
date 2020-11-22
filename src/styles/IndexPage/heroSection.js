
import styled, {keyframes} from "styled-components"
import { device } from "../constants"

export const HeroLayout = styled.div`
  width:100%;
  height:100vh;
  background-color: #191B1C;
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  z-index:0;
  left:0;
  top:0;
  overflow:hidden;
  @media ${device.tablet} {
    height:50vh;
  }
`


export const HeroText = styled.div`
  
  margin-top:20vh;
 
  @media ${device.laptop} {
    margin-top:18vh;
  }
  @media ${device.tablet} {
    margin-top:13vh;
  }
  ul {
    width:100%;
    height:100%;
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-conten:space-between;
    mix-blend-mode: difference;
    
    li {
      color:#1A6AFF;
      font-size:84px;
      line-height:110px;
      letter-spacing:0.05em;
      text-align:center;
      font-family:Verona Serial;
      font-weight:400;
      text-transform:uppercase;
      position:relative;
      display:flex;
      flex-direction:column;
      @media ${device.laptopL} {
        font-size:72px;
        line-height:96px;
        height:96px;
      }
      @media ${device.laptop} {
        font-size:60px;
        line-height:80px;
        height:80px;
      }
      @media ${device.tablet} {
        font-size:44px;
        line-height:60px;
        height:60px;
        max-width:567px;
      }
      svg {
        margin-top:-15px;
        @media ${device.laptopL} {
          width:220px;
        }
        @media ${device.laptop} {
          width:200px;
        }
        @media ${device.tablet} {
          width:140px;
        }
      }
    }
  }
  
`


const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const HeroScrollDown = styled.div`
  position:absolute;
  svg {
      animation: ${rotation} 10s linear infinite;
  }

  top:-50%;
`

export const ScrollWrapper = styled.div`
  margin-top:100px;
  position:relative;
  width:120px;
  height:120px;
`






export const WordsWrapper = styled.div`
  position:relative;
  height:110px;
  overflow:hidden;
  @media ${device.laptopL} {
    height:96px;
  }
  @media ${device.laptop} {
    height:80px;
  }
  @media ${device.tablet} {
    height:60px;
  }
  li {
    position:absolute;    
  }
`




//mix-blend-mode: difference;