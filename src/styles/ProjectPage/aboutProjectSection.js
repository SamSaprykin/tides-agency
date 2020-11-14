import styled from "styled-components"
import { device } from "../constants"

export const AboutProjectWrapper = styled.div`
    max-width:1002px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    @media ${device.tablet} {
        max-width:588px;
    }
`

export const AboutProjectTitle = styled.h4`
    font-size:60px;
    line-height:116px;
    letter-spacing:0.05em;
    color:#E8ECF3;
    text-align:left; 
    text-transform:uppercase;
    font-family:Verona Serial;
    font-weight:400;
    margin-bottom:18px;
    @media ${device.tablet} {
        font-size:38px;
    }
`

export const AboutProjectContent = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:50px 0 150px;
    @media ${device.tablet} {
        padding:50px 0 100px;
    }
`

export const AboutProjectInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
`

export const AboutProjectDescription = styled.div`
    max-width:731px;
    @media ${device.tablet} {
        max-width:375px;
    }
    p {
        font-family: Bandeins Sans;
        font-weight:400;
        font-size:38px;
        line-height:50px;
        color:#E8ECF3;
        @media ${device.tablet} {
            font-size:18px;
            line-height:27.5px;
        }
    }
`

export const TitleContent = styled.h5`
    display:flex;
    flex-direction:column;
    margin-bottom:120px;
    @media ${device.tablet} {
        margin-bottom:0px;
    }
    h5 {
        font-family: Bandeins Sans;
        font-weight:400;
        font-size:20px;
        line-height:34px;
        color:#E8ECF3;
        margin-bottom:22px;
        @media ${device.tablet} {
            font-size:18px;
        }
    }

    span {
        font-family: Bandeins Sans;
        font-weight:400;
        font-size:28px;
        line-height:36px;
        color:#E8ECF3;
        @media ${device.tablet} {
            font-size:22px;
        }
    }
`


