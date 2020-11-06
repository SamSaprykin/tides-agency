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
    width:46%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const WrapperForcesItem = styled.div`
    top:205px;
    height:140px;
    position:relative;
    overflow:hidden;
    ul {
        position:absolute;
        transition:all 1.8s ease-in-out;
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