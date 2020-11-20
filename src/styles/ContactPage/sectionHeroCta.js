import styled from "styled-components"
import { device } from "../constants"

export const HeroCtaWrapper = styled.div`
    max-width:1002px;
    margin:0 auto;
    padding-top:230px;
    display:flex;
    flex-direction:column;
    @media ${device.laptopL} {
        max-width:960px;
    }
    @media ${device.laptop} {
        max-width:744px;
        padding-top:170px;
    }
    @media ${device.tablet} {
        max-width:588px;
        align-items:flex-end;
    }
    @media ${device.mobileL} {
        padding:101px 20px 0;
    }
`

export const HeroCtaTitle = styled.div`
    font-family:Verona Serial;
    font-size:96px;
    line-height:116px;
    tont-weight:400;
    letter-spacing:0.05em;
    color:#E8ECF3;
    text-transform:uppercase;
    position:relative;
    @media ${device.laptopL} {
        font-size:80px;
        line-height:96px;
    }
    @media ${device.laptop} {
        font-size:72px;
        line-height:96px;
    }
    @media ${device.tablet} {
        font-size:46px;
        line-height:58px;
    }
    @media ${device.mobileL} {
        font-size:38px;
        line-height:58px;
    }
    span {
        color:#1A6AFF;
    }
    h5 {
        padding-left:250px;
        font-size:96px;
        line-height:116px;
        font-weight:400;
        letter-spacing:0.05em;
        color:#E8ECF3;
        font-family:Verona Serial;
        @media ${device.laptopL} {
            font-size:80px;
            line-height:96px;
        }
        @media ${device.laptop} {
            font-size:72px;
            line-height:96px;
        }
        @media ${device.tablet} {
            font-size:46px;
            line-height:58px;
            padding-left:170px;
        }
        @media ${device.mobileL} {
            font-size:38px;
            line-height:58px;
            padding-left:96px;
        }
    }
    svg {
        position:absolute;
        right:30px;
        top:100px;
        @media ${device.laptopL} {
            width:234px;
            right:140px;
            top:90px;
        }
        @media ${device.laptop} {
            width:212px;
            right:10px;
            top:80px;
        }
        @media ${device.tablet} {
            width:133px;
            top:50px;
            right:120px;
        }
        @media ${device.mobileL} {
            width:112px;
            left:0;
            top:104px;
        }
    }
`

export const HeroCtaCta = styled.span`
    font-family:Bandeins Sans;
    font-size:38px;
    line-height:50px;
    color:#E8ECF3;
    font-weight:400;
    max-width:541px;
    margin:0 auto;
    margin-top:-50px;
    padding:0 0 40px 20px;
    @media ${device.tablet} {
        font-size:28px;
        line-height:42px;
        max-width:398px;
        margin:50px 0 0;
        padding-left:0;
    }
    @media ${device.mobileL} {
        font-size:24px;
        line-height:28px;
    }
`  

