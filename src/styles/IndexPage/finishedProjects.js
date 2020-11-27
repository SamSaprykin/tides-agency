import styled from "styled-components"
import { device } from "../constants"


export const FinishedProjectsWrapper = styled.div`
    background-color:#191B1C;
    padding-top:50px;
    max-width:1302px;
    margin:0 auto;
    @media ${device.laptopL} {
        max-width:1160px;
    }
    @media ${device.laptop} {
        max-width:960px;
    }
    @media ${device.tablet} {
        max-width:728px;
    }
    @media ${device.mobileL} {
        padding:0 20px;
    }
`

export const WrapperBoard = styled.div`
    background-color:#E8ECF3;
`

export const WrapperContent = styled.div`
    padding:50px 145px 80px;
    display:flex;
    flex-direction:column;
    @media ${device.laptopL} {
        padding:50px 100px 80px;
    }
    @media ${device.laptop} {
        padding:50px 80px 80px;
    }
    @media ${device.tablet} {
        padding:70px;
    }
    @media ${device.mobileL} {
        padding:30px 20px;
    }
`

export const TitleProjects  = styled.h2`
    font-size:57px;
    line-height:116px;
    letter-spacing:0.05em;
    color:#191B1C;
    font-family:Verona Serial;
    font-weight:400;
    text-transform:uppercase;
    width:100%;
    max-width:1002px;
    margin:0 auto;
    position:relative;
    height:120px;
    overflow:hidden;
    padding-bottom:20px;
    @media ${device.tablet} {
        font-size:38px;
        line-height:50px;
    }
    @media ${device.mobileL} {
        font-size:28px;
        line-height:32px;
        height:85px;
    }
    p {
        position:absolute;
    }
`



export const DescriptionWrapper = styled.div`
    padding:50px 0 100px;
    display:flex;
    
    justify-content:space-between;
    align-items:flex-start;
    @media ${device.tablet} {
        padding-bottom:50px;
    }
    @media ${device.mobileL} {
        flex-direction:column;
        padding-top:22px;
    }
`

export const Description = styled.h5`
    width:29%;
    text-transform:uppercase;
    font-size:28px;
    line-height:36px;
    font-family: Bandeins Sans;
    @media ${device.tablet} {
        font-size:18px;
        line-height:27.45px;
        width:33%;
    }
    @media ${device.mobileL} {
        width:100%;
        margin-bottom:23px;
        line-height:23.76px;
    }
`

export const Information = styled.p`
    width:60%;
    font-family: Bandeins Sans;
    font-size:24px;
    line-height:36px;
    text-align:justify;
    @media ${device.tablet} {
        max-width:300px;
        font-size:16px;
        line-height:26.88px;
    }
    @media ${device.mobileL} {
        width:100%;
        font-size:14px;
        line-height:25.31px;
    }
`

export const ProjectsLinks  = styled.ul`
    list-style:none;
    p {
        margin-bottom:0;
    }
`

export const ProjectItem = styled.li`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:50px 0;
    justify-content:space-between;
    height:48px;
    transition: all .5s;
    @media ${device.mobileL} {
        padding:28px 0;
    }
    div {
        height:88px;
        overflow:hidden;
        position:relative;
        width:120px;
        
        p {
            position:absolute;
        }
    }
    :hover {
        padding:50px 30px;
        background-color:#191B1C;
        @media ${device.mobileL} {
            padding:28px 10px;
        }
    }
    
    div {
        text-align:left;
        width:100%;
        max-width:300px; 
    }
    
    
`

export const WorkType = styled.span `
    padding:0 4px;
    font-family:Bandeins Sans;
    font-size:20px;
    line-height:34px;
    color: #191B1C;
    font-weight:400;
    width:350px;
    display:inline-block;
    ${ProjectItem} : hover & {
        color:#E8ECF3;
    }
    @media ${device.tablet} {
        font-size:16px;
        width:260px;
    }
    @media ${device.mobileL} {
        width:150px;
        font-size:9px;
        line-height:13px;
        display:flex;
        flex-direction:column;
    }
`

export const IconItem = styled.img`
    width:120px;
    margin-bottom:0;
    ${ProjectItem}:hover & {
        filter: invert(1);
    }
    @media ${device.mobileL} {
        width:73px;
    }
`

export const WorkYear = styled.h5`
    color: #191B1C;
    margin-bottom:0;
    font-size:20px;
    line-height:34px;
    font-family:Bandeins Sans;
    font-weight:400;
    ${ProjectItem} : hover & {
        color:#E8ECF3;
    }
    @media ${device.tablet} {
        font-size:16px;
    }
    @media ${device.mobileL} {
        font-size:10px;
    }
`

export const ArrowWork = styled.img`
    width:13px;
    height:13px;
    ${ProjectItem}:hover & {
        filter: invert(1);
    }
`