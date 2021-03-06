import styled from "styled-components"
import { device } from "./constants"
export const HeaderNavWrapper = styled.div`
    position:fixed;
    top:0;
    margin:0 auto;
    width:100%;
    height:100px;
    padding:50px 69px 0;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    z-index:2;
    mix-blend-mode: ${({ secondaryColor }) => {
      if (secondaryColor <= -550  ) return " difference;"
    }};
    
    @media ${device.tablet} {
      padding: 0 20px;
    }
`

export const HeaderLogo = styled.div`
  @media ${device.tablet} {
    width:40px;
  }
  @media ${device.mobileL} {
    width:27px;
  }
`

export const HeaderMenuButtonWrapper = styled.div`
  
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
    @media ${device.tablet} {
      display:none;
    }
  }
  svg {
    width:75px;
    
  }
`

export const LogoImage = styled.img`
  width:50px;
  height:50px;
  margin-bottom:0;
  
  
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
  @media ${device.tablet} {
    justify-content:flex-end;
    padding:0 !important;
  }
`

export const IconWaveWrapper = styled.div`
  width:29px;
  overflow:hidden;
  
  svg {
    transition: transform 7s;
    
    fill: ${({ hovered }) => {
      if (hovered === true) return "#FFCC00;"
      if (hovered === false) return "#E8ECF3;"
    }};
    transform: ${({ hovered }) => {
      if (hovered === true) return "translate(-75px,0);"
      if (hovered === false) return "initial;"
    }};
    @media ${device.tablet} {
      transform:none;
    }
  }
`

export const HeaderLayout = styled.div`
  position:relative;
  z-index:1;
  left:0;
  top:0;
  
`