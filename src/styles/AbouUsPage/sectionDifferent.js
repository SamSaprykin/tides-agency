import styled from "styled-components"
import { device } from "../constants"
export const WrapperDifferent = styled.div`
    width:100%;
    max-width:1002px;
    padding:119px 0 107px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    @media ${device.laptopL} {
        max-width:960px;
    }
    @media ${device.laptop} {
        max-width:744px;
        padding:59px 0 50px;
    }
    @media ${device.tablet} {
        max-width:588px;
    }
    @media ${device.mobileL} {
        padding:47px 20px;
    }
`

export const TitleDifferent = styled.h2`
    font-size:60px;
    line-height:116px;
    letter-spacing:0.05em;
    font-family: Verona Serial;
    color:#E8ECF3;
    margin-bottom:19px;
    text-transform:uppercase;
    font-weight:400;
    @media ${device.tablet} {
        font-size:38px;
        line-height:116px;
    }
    @media ${device.mobileL} {
        font-size:28px;
        line-height:32px;
    }
`

export const ContentDifferent = styled.div`
    display:flex;
    flex-direction:column;

`

export const ContentHeader = styled.div`
    width:100%;
    height:auto;
    margin:57px 0 50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    svg {
        margin-right:50px;
        @media ${device.tablet} {
            margin-right:0px;
        }
    }
    p {
        font-family: Bandeins Sans;
        font-size:28px;
        line-height:36px;
        color:#E8ECF3;
        font-weight:400;
        text-transform:uppercase;
        max-width:756px;
        @media ${device.tablet} {
            font-size:18px;
            line-height:27.45px;
            max-width:420px;
        }
    }
`

export const ContentItemsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const ContentItem = styled.div`
    font-family: Bandeins Sans;
    font-size:24px;
    line-height:36px;
    color:#E8ECF3;
    font-weight:400;
    margin-bottom:30px;
    width:45%;
    @media ${device.tablet} {
        width:100%;
        font-size:18px;
        line-height:27.45px;
    }
    @media ${device.mobileL} {
        font-size:14px;
        margin-bottom:20px;
    }
    span {
        text-decoration:underline;
        margin-right:8px;
    }

`