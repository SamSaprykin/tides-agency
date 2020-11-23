import styled from "styled-components"
import { device } from "./constants"
export const HamburgerMenu = styled.div`
    display: none;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%; 
    
`

export const MenuSecondaryBackgroundColor = styled.div`
    background:transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 10;
    @media ${device.tablet} {
        width: 200%;
    }
    .first {
        height:90%;
    }
    .second {
        height:90%;
        top:0;
    }
    .third {
        height:70%;
        top:0;
    }
    .four {
        height:50%;
        top:0;
    }
    div {
        z-index:100;
        position:absolute;
        transform:rotate(180deg);
        
    }
`

export const MenuLayer = styled.div`
    position: relative;
    background: #191B1C;
    height: 100%;
    overflow: hidden;
`

export const MenuContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    
`


export const MenuWrapper = styled.div`
    position: relative;
    padding: 0 24px;
    @media ${device.mobileL} {
        padding: 0 32px;
    }
`

export const MenuLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    top: 10vh;
    width:100%;
    margin:0 auto;
    
    @media ${device.tablet} {
        max-width:755px;
    }
    @media ${device.mobileL} {
        flex-direction:column;
        top: 3vh;
    }
    nav {
    display: block;
    width:100%;
    max-width:800px;
    @media ${device.desktop} {
        max-width:600px;
    }
    @media ${device.laptop} {
        max-width:500px;
    }
    @media ${device.tablet} {
        max-width:400px;
    }
    
    ul {
        margin: 0;
        padding: 0;
        width:100%;
        @media ${device.tablet} {
            max-width:400px;
        }
        li {
            list-style: none;
            overflow: hidden;
            position: relative;
            width:100%;
            max-width: 700px;
            @media ${device.tablet} {
                max-width: 400px;
                width:100%;
            }
            @media ${device.tablet} {
                max-width:588px;
            }
            height: 82px;
            margin-bottom:38px;
            @media ${device.mobileL} {
                height: 48px;
                margin-bottom:0;
            }
        h2 {
            position:absolute;
            height: 82px;
            font-size: 64px;
            line-height:116px;
            letter-spacing:0.05em;
            text-transform:uppercase;
            top:50%;
            transform: translate(0,-50%);
            color: #fff;
            font-family:Verona Serial;
            font-weight:400;
            @media ${device.tablet} {
                font-size: 36px;
            }
            @media ${device.mobileL} {
                font-size: 32px;
                line-height:40px;
                height: 40px;
            }
            a {
                color:#E8ECF3;
                padding-left:8px;
                transition: -webkit-text-stroke .2s ease-in-out;
                transition: color .2s ease-in-out;
                @media ${device.mobileL} {
                    padding-left:0;
                }
                :hover {
                    -webkit-text-stroke: 1px #E8ECF3;
                    color:transparent;
                }
            }
          }
        }
      }
    }
`

export const MenuInfo = styled.div`
    color: #fff;
    width: 300px;
    margin-top:42px;
    position:relative;
    overflow:hidden;
    p {
        font-size: 20px;
        line-height:34px;
        
    }
`

export const SocialLinks = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    margin: 45px auto;
    @media ${device.mobileL} {
        margin: 24px auto;
    }
`

export const SocialLinksItem = styled.li`
    font-size:31px;
    line-height:36px;
    font-weight:300;
    height:34px;
    overflow: hidden;
    position: relative;
    @media ${device.tablet} {
        font-size:22px;
    }
    @media ${device.mobileL} {
        font-size:22px;
        line-height:28.93px;
    }
    :hover {
        a {
            color:#1A6AFF;
        }
        h3 {
            margin-left:0px;
        }
    }
    h3 {
        position:absolute;
        height: 34px;
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-left:-24px;
        transition: margin-left .2s ease-in-out;
        @media ${device.mobileL} {
            height: 28px;
        }
        svg {
            path {
                fill: #1A6AFF !important;
            }
        }
        a {
            font-family:Bandeins Sans;
            font-weight:400;
            color:#E8ECF3;
            margin-left:8px;   
        }
    }
`

export const EmailTides = styled.h5`
    
    font-size:31px !important; 
    line-height:36px;
    color:#E8ECF3;
    font-family:Bandeins Sans;
    font-weight:400;
    transition: color .2s ease-in-out;
    @media ${device.tablet} {
        font-size:22px !important; 
    }
    :hover {
        color:#1A6AFF;
    }
`

export const MenuHeader = styled.div`
    margin-top:50px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    position:relative;
    height:50px;
    overflow:hidden;
    @media ${device.mobileL} {
        margin-top:18px;
    }
`

export const LogoWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    position:absolute;
    height:50px;
    left:0;
    top:50%;
    transform: translate(0,-50%);
    img {
        width:50px;
        height:50px;
        margin-bottom:0 !important;
        @media ${device.mobileL} {
            width:27px;
            height:27px;
        }
    }
    h5 {
        margin-left:8px;
        font-size:18px;
        line-height:123.8%;
        color:#E8ECF3;
        text-transform:uppercase;
        font-weight:400;
        max-width:80px;
        margin-bottom:0 !important;
        font-family:Bandeins Sans;
        @media ${device.mobileL} {
            font-size:10px;
            max-width:40px;
        }
    }
`

export const CloseButtonWrapper = styled.div`
    position:absolute;
    height: 50px;
    right:0;
    top:50%;
    transform: translate(0,-50%);
    display:flex;
    flex-direction:row;
    align-items:center;
    
    span {
        margin-left:8px;
        margin-right:12px;
        font-size:20px;
        line-height:34px;
        color:#E8ECF3;
        font-family:Bandeins Sans;
        font-weight:400;
        @media ${device.mobileL} {
            display:none;
        }
    }
    button {
        width:24px;
        height:24px;
        background:transparent;
        border:none;
        outline:none;
    }
`

export const WrapperText = styled.div`
   position:relative;
   height:34px;
   overflow:hidden;
   :nth-of-type(3) {
    margin-top:40px !important;
    @media ${device.mobileL} {
        margin-top:16px !important;
    }
   }
   h5 {
       height:34px;
       position:absolute;
       margin:0 !important;
       font-family:Bandeins Sans;
       font-weight:400;
       font-size:20px;
       color:#E8ECF3;
       @media ${device.mobileL} {
        font-size:14px;
       }
   }
`

export const Hamburger = styled.div`
  background-color:#191B1C;
  width:14px;
  height:14px;

  position:relative;
  border-radius:6px;
  
 
  padding-left:12px;
  
  ::before,
  ::after {
    content:'';
    position:absolute;
    width:24px;
    height:2px;
    background-color:#E8ECF3;
    border-radius:2px;
    top:8px;
    ${CloseButtonWrapper} :hover & {
        background-color:#1A6AFF !important;   
    }
    
  }

  ::before{
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform:rotate(45deg);
    left:-5px;
  }

  ::after{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform:rotate(-45deg);
    right:-5px;
  }
  
`