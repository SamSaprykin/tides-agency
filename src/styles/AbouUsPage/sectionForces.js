import styled from "styled-components"

export const WrapperForces = styled.div`
    width:100%;
    max-width:1302px;
    background-color:#E8ECF3;
    padding:136px 145px;
    margin:0 auto;
`

export const ContainerForces = styled.div`
    display:flex;
    flex-direction:column;

`

export const TitleForces = styled.h2`
    font-family: Verona Serial;
    font-weight:400;
    font-size:60px;
    line-height:79px;
    letter-spacing:0.05em;
    text-transform:uppercase;
    margin-bottom:38px;
`

export const TextForces = styled.p`
    padding:50px 0 60px;
    font-size:28px;
    line-height:36px;
    color:#191B1C;
    font-family: Bandeins Sans;
`

export const SliderForces = styled.div`
    margin-top:40px;
    position:relative;
    height:450px;
`

export const SliderForcesTitle = styled.h4`
    font-size:34px;
    line-height:38px;
    font-family: Bandeins Sans;
    font-weight:400;
    color:#191B1C;
    span {
        font-family: Stinger Fit;
        font-weight:400;
        text-transform:uppercase;
        color: #1A6AFF;
    }
`

export const SliderForcesDescription = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
`

export const WrapperForcesItem = styled.div`
    top:0;
    right:0;
    height:140px;
    position:relative;
    overflow:hidden;
    
    width:100%;
    ul {
        position:absolute;
        transition:all 1.8s ease-in-out;
        right:0;
        :hover {
            transform:translateY(-140px);
        }
        li {
            -webkit-text-stroke: 2px #191B1C;
            font-weight:400;
            font-size:72px;
            line-height:140px;
            font-family:Bandeins Sans;
            text-transform:uppercase;
            color:transparent;
            
        }
    }
    
`

export const SliderForcesFiguresWrapper = styled.div`
    width:46%;
    margin-top:80px;
    height:100%;
`

export const SliderButtonsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:154px;
    position:absolute;
    right:0;
    top:0;
    z-index:2;
    .left {
        transform: rotate(180deg);
    }
`

export const SliderButton = styled.button`
    background-color:transparent;
    width:70px;
    height:70px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    border:1px solid #191B1C;
    outline:none;
    svg {
        path {
            fill: #191B1C !important;
        }
    }
    :hover {
    border:1px solid #1A6AFF;
    svg {
        path {
            fill: #1A6AFF !important;
        }
      }
    }

`

const positionX1 = Math.floor(Math.random() * 10);
const positionY1 = Math.floor(Math.random() * 30);
const rotate1 = Math.floor(Math.random() * 30);
const positionX2 = Math.floor(Math.random() * 10);
const positionY2 = Math.floor(Math.random() * 25);
const rotate2 = Math.floor(Math.random() * 45);
const positionX3 = Math.floor(Math.random() * 10);
const positionY3 = Math.floor(Math.random() * 20);
const rotate3 = Math.floor(Math.random() * 90);
export const FigureWrapper = styled.div`
    position:relative;
    width:100%;
    height:auto;
    
`

export const FigureImage = styled.img`
    position:absolute;
    top:0;
    left:0;
    transition:all .8s ease-in-out;
    :nth-of-type(1) {
        top:-${positionX1}px;
        left:${positionY1}px;
    }
    :nth-of-type(2) {
        top:-${positionX2}px;
        left:${positionY2}px;
    }
    :nth-of-type(3) {
        top:-${positionX3}px;
        left:${positionY3}px;
    }
    ${SliderForcesFiguresWrapper} :hover & {
        :nth-of-type(1) {
            top:-${positionX1}vh;
            left:${positionY1}vw;
            transform:rotate(${rotate1}deg);
            opacity:0;
        }
        :nth-of-type(2) {
            top:${positionX2}vh;
            left:-${positionY2}vw;
            transform:rotate(-${rotate2}deg);
            opacity:0;
        }
        :nth-of-type(3) {
            top:${positionX3}vh;
            left:${positionY3}vw;
            transform:rotate(${rotate3}deg);
            opacity:0;
        }
    }
    
`

export const SliderContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    height:100%;
`