import styled from "styled-components"

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
    background:#191B1C;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 10;
    .first {
        height:80%;
    }
    .second {
        height:80%;
        bottom:0;
    }
    .third {
        height:60%;
        bottom:0;
    }
    .four {
        height:40%;
        bottom:0;
    }
    div {
        z-index:100;
        position:absolute;
        
    }
`

export const MenuLayer = styled.div`
    position: relative;
    background: #191B1C;
    height: 100%;
    overflow: hidden;
    .menu-city-background {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
        background-size: cover;
        background-repeat: no-repeat;
        animation-name: backgroundEffect;
        animation-duration: 30s;
        animation-iteration-count: infinite;
    }
`

export const MenuContainer = styled.div`
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
`


export const MenuWrapper = styled.div`
    position: relative;
    padding: 0 24px;
`

export const MenuLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    top: 10vh;
    nav {
    display: block;
    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            overflow: hidden;
            position: relative;
            width: 700px;
            height: 82px;
            margin-bottom:38px;
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
            a {
                color:#E8ECF3;
                padding-left:8px;
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
`

export const SocialLinksItem = styled.li`
    font-size:31px;
    line-height:36px;
    font-weight:300;
    height:34px;
    overflow: hidden;
    position: relative;
    h3 {
        position:absolute;
        height: 34px;
        a {
            font-family:Bandeins Sans;
            font-weight:400;
            color:#E8ECF3;
    
        }
    }
`

export const EmailTides = styled.h5`
    
    font-size:31px !important; 
    line-height:36px;
    color:#E8ECF3;
    font-family:Bandeins Sans;
    font-weight:400;
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
        
    }
`

export const CloseButtonWrapper = styled.div`
    position:absolute;
    display: flex;
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
   }
   h5 {
       height:34px;
       position:absolute;
       margin:0 !important;
       font-family:Bandeins Sans;
       font-weight:400;
       font-size:20px;
       color:#E8ECF3;
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