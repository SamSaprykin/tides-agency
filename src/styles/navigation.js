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
    background:black;
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
    background: black;
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
    padding: 0 48px;
`

export const MenuLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 200px;
    nav {
    display: block;
    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            cursor: pointer;
            overflow: hidden;
            position: relative;
            width: 700px;
            height: 100px;
        h2 {
            position:absolute;
            height: 100px;
            font-size: 4rem;
            font-weight: 700;
            top:50%;
            transform: translate(0,-50%);
            color: #fff;
            &:hover {
            color: gray;
            }
          }
        }
      }
    }
`

export const MenuInfo = styled.div`
    color: #fff;
    width: 300px;
    h3 {
        font-size: 1.2rem;
        margin: 8px auto;
    }
    p {
        margin: 0 auto;
        font-size: 0.8rem;
    }
`