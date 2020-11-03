
import styled, {keyframes} from "styled-components"

export const HeroLayout = styled.div`
  width:100%;
  height:100vh;
  background-color: #191B1C;
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  z-index:1;
  left:0;
  top:0;
  
`


export const HeroNavWrapper = styled.div`
    position:fixed;
    top:0;
    width:100%;
    height:100px;
    padding:50px 69px 0;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    z-index:1000;
`

export const HeroLogo = styled.div`

`

export const HeroMenuButtonWrapper = styled.div`
  filter: ${({ secondaryColor }) => {
    if (secondaryColor <= -2350 && -3500 <= secondaryColor ) return "invert(1);"
    if (secondaryColor <= -3500) return "invert(0);"
  }};
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  span {
    margin-right:10px;
    color:#E8ECF3;
    font-family:Bandeins Sans;
    font-weight:400;
    font-size:20px;
    line-height:34px;
  }
  svg {
    width:75px;
  }
`


export const HeroText = styled.div`
  
  margin-top:20vh;
  &:hover ~ ${HeroNavWrapper} {
    opacity: 0;
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

export const Centered  = styled.div`
  position:absolute;

  top:-50%;
`

export const LogoImage = styled.img`
  width:50px;
  height:50px;
  margin-bottom:0;
  filter: ${({ secondaryColor }) => {
    if (secondaryColor <= -2350 && -3500 <= secondaryColor ) return "invert(1);"
    if (secondaryColor <= -3500) return "invert(0);"
  }};
`

export const ButtonMenu  = styled.button`
  width:100%;
  height:50px;
  background:transparent;
  border:none;
  outline:none;
  display:flex;
  flex-direction:row;
  align-items:center;
`

export const IconWaveWrapper = styled.div`
  width:29px;
  overflow:hidden;
  svg {
    transition: transform 7s;
    fill: ${({ hovered }) => {
      if (hovered === true) return "#1A6AFF;"
      if (hovered === false) return "#E8ECF3;"
    }};
    transform: ${({ hovered }) => {
      if (hovered === true) return "translate(-75px,0);"
      if (hovered === false) return "initial;"
    }};
  }
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