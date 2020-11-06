
import styled, {keyframes} from "styled-components"

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
  
`


export const HeroText = styled.div`
  
  margin-top:20vh;
  
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
      svg {
        margin-top:-15px;
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
  li {
    position:absolute;
    height: 110px;
   
  }
`




//mix-blend-mode: difference;