import styled, { keyframes } from "styled-components"


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
`

export const SkillsSectionTitle = styled.h4`
    font-family: Verona Serial;
    font-weight: 400;
    font-size:60px;
    line-height:116px;
    margin-top:30px;
    text-transform:uppercase;
    color:#E8ECF3;
    letter-spacing:0.05em;
`

export const SkillsSectionDescription = styled.p`
    color:#E8ECF3;
    font-family: Bandeins Sans;
    font-size:38px;
    line-height:50px;
    font-weight:400;
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
`

export const SkillSectionPlanetsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    margin-top:150px;
    justify-content:space-between;
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
const rotate = keyframes`
    from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
`;

export const SmallPlanet = styled.img`
    width:70px;
    height:70px;
    position:absolute;
    z-index:2;
    top:225px;
    left:210px;
    animation: ${rotate} 7s linear infinite;
`



export const SkillSectionSun = styled.img``

export const SkillSectionMoon = styled.img`
    position:relative;
    z-index:2;
`