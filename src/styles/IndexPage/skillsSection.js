import styled from "styled-components"
import { device } from "../constants"

export const SkillsSectionContainer = styled.div`
    width:100%;
    height:100%;
    background-image: url('/background-planets.png');
    background-size: 100% 65%;
    background-position: center bottom;
    background-repeat: no-repeat;
`

export const SkillsSectionWrapper = styled.div`
    
    border-top:1px solid #E8ECF3;
    margin:80px auto;
    max-width:1002px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    @media ${device.laptopL} {
        max-width:960px;
    }
    @media ${device.laptop} {
        max-width:744px;
    }
    @media ${device.tablet} {
        max-width:588px;
    }
    @media ${device.mobileL} {
        padding:0 20px;
    }
`

export const SkillsSectionTitle = styled.h4`
    font-family: Verona Serial;
    font-weight: 400;
    font-size:60px;
    line-height:116px;
    height:116px;
    margin-top:30px;
    text-transform:uppercase;
    color:#E8ECF3;
    letter-spacing:0.05em;
    position:relative;
    overflow:hidden;
    margin-bottom:9px;
    @media ${device.tablet} {
        font-size:38px;
    }
    p {
        position:absolute;
    }
`

export const SkillsSectionDescription = styled.p`
    color:#E8ECF3;
    font-family: Bandeins Sans;
    font-size:38px;
    line-height:50px;
    font-weight:400;
    position:relative;
    overflow:hidden;
    height:100px;
    @media ${device.tablet} {
        font-size:28px;
        line-height:42.7px;
        height:120px;
    }
    p {
        position:absolute;
    }
    span {
        color:#1A6AFF;
        text-transform:uppercase;
    }
`

export const SkillsSectionCta = styled.span`
    color:#FFCC00;
    font-family: Bandeins Sans;
    font-size:24px;
    line-height:36px;
    font-weight:400;
    @media ${device.tablet} {
       font-size:20px;
    }
`

export const SkillsSectionCtaWrapper = styled.div`
    margin-top:60px;
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const SkillsSectionCtaButton = styled.button`
    width:70px;
    height:70px;
    border-radius:100%;
    border:1px solid #FFCC00;
    background-color:transparent;
    box-shadow:none;
    outline:none;
    margin-left:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    transition: all .2s ease-in-out;
    ${SkillsSectionCtaWrapper} : hover & {
        background-color:#FFCC00;
        svg {
            path {
                fill: #191B1C !important;
            }
        }
    }

    
`

export const SkillSectionPlanetsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    margin-top:146.5px;
    justify-content:space-between;
    @media ${device.tablet} {
        margin-top:50px;
    }
`

export const SkillSectionSunWrapper = styled.div`
    width:30%;
`

export const SkillSectionMoonWrapper = styled.div`
    margin-top:36px;
    width:50%;
    position:relative;
    height:500px;
`




export const SmallPlanet = styled.img`
    width:70px;
    height:70px;
    position:absolute;
    z-index:2;
    top:225px;
    left:210px;
    transform: rotate(0deg) translateX(120px) rotate(0deg);
    transform: ${({ position }) => {
        if (position) return `rotate(${position/5}deg) translateX(120px) rotate(${position/5}deg);`
    }};
    transition: all .5s linear;
    @media ${device.tablet} {
        width:35px;
        height:35px;
    }
`



export const SkillSectionSun = styled.img``

export const SkillSectionMoon = styled.img`
    position:relative;
    z-index:2;
`