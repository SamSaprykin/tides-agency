import styled from "styled-components"
import { device } from "../constants"

export const WrapperStory = styled.div`
    margin:80px 0;
    position:relative;
    @media ${device.laptop} {
        margin:20px 0 50px;
    }
    @media ${device.mobileL} {
        margin:46px 0;
    }
`

export const ContainerStory = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1002px;
    margin:0 auto;
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
export const TitleStory =  styled.h2`
    font-size: 60px;
    line-height:116px;
    letter-spacing: 0.05em;
    color:#E8ECF3;
    font-family:Verona Serial;
    font-weight:400;
    text-transform:uppercase;
    @media ${device.tablet} {
        font-size: 38px;
    }
    @media ${device.mobileL} {
        font-size: 28px;
        line-height:32.2px;
    }
`


export const ContentWrapper = styled.div`
    margin-top:50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media ${device.mobileL} {
        flex-direction:column;
    }
    
`
export const Description = styled.div`
    width:38%;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media ${device.mobileL} {
        width:100%;
        margin-bottom:20px;
    }
    p {
        text-transform:uppercase;
        font-family:Bandeins Sans;
        font-size:28px;
        line-height:36px;
        font-weight:400;
        color:#E8ECF3;
        @media ${device.tablet} {
            font-size: 18px;
            line-height:27.45px;
        }
        
    }
    svg {
        margin:64px auto;
        @media ${device.mobileL} {
            display:none;
        }
    }
`

export const Information = styled.div`
    width:55%;
    @media ${device.mobileL} {
        width:100%;
    }
    p {
        font-family:Bandeins Sans;
        font-size:24px;
        line-height:36px;
        font-weight:400;
        color:#E8ECF3;
        @media ${device.tablet} {
            font-size: 16px;
            line-height:26.88px;
        }
        @media ${device.tablet} {
            font-size: 14px;
            line-height:25.37px;
        }
    }
`