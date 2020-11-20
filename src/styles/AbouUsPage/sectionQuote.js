import styled from "styled-components"
import { device } from "../constants"
export const QuoteLayout = styled.div`
    max-width:1302px;
    width:100%;
    height:auto;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;   
`



export const QuoteHeader = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border-bottom: 1px solid #E8ECF3;
    padding-bottom:30px;
    max-width:1302px;
    margin:55px auto 0;
    position:fixed;
    z-index:1;
    mix-blend-mode: difference;
    @media ${device.laptop} {
        max-width:960px;
    }
    @media ${device.tablet} {
        max-width:728px;
        margin-top:35px;
    }
   
`


export const QuoteTitle  = styled.h5`
    font-family:Bandeins Sans;
    font-size:18px;
    line-height:36px;
    font-weight:400;
    color:#E8ECF3;
    text-transform:uppercase;
    margin-left:30px;
    @media ${device.tablet} {
        font-size:14px;
    }
    @media ${device.mobileL} {
        display:none;
    }
`

export const ContentContainer = styled.div`
    padding-top:100px;
    position:relative;
    max-width:1002px;
    @media ${device.laptopL} {
        max-width:1002px;
    }
    @media ${device.laptop} {
        max-width:744px;
    }
    @media ${device.tablet} {
        max-width:588px;
    }
    @media ${device.mobileL} {
        padding:80px 20px 0;
    }
`

export const QuoteText = styled.div`
    font-family: Verona Serial;
    font-size:53px;
    line-height:80px;
    letter-spacing:0.05em;
    text-transform:uppercase;
    font-weight:800;
    color:#E8ECF3;
    padding-bottom:80px;
    padding-top:83px;
    @media ${device.laptopL} {
        padding-bottom:110px;
    }
    @media ${device.laptop} {
        font-size:44px;
        line-height:62px;
        padding-bottom:120px;
    }
    @media ${device.tablet} {
        font-size:36px;
        line-height:54.9px;
        padding-bottom:100px;
    }
    @media ${device.mobileL} {
        font-size:24px;
        line-height:36.6px;
        padding-bottom:50px;
        padding-top:43px;
    }
    .quote {
        left:0;
        top:50px;
        z-index:-1;
        @media ${device.laptop} {
            width:120px;
            top:40px;
        }
        @media ${device.tablet} {
            width:96px;
            top:40px;
        }
        @media ${device.mobileL} {
            width:54px;
            top:0px;
        }
    }
    svg {
        position:absolute;
        top:153px;
        left:330px;
        @media ${device.laptop} {
            width:210px;
            top:136px;
            left:270px;
        }
        @media ${device.tablet} {
            width:170px;
            top:126px;
            left:220px;
        }
        @media ${device.mobileL} {
            width:115px;
            left:150px;
            top:70px;
        }
    }
    span {
        color:#1A6AFF;
        font-family: Stinger Fit;
        font-weight:400;
        font-size:60px;
        line-height:123.8%;
        @media ${device.laptop} {
            font-size:44px;
            line-height:58px;
        }
        @media ${device.tablet} {
            font-size:36px;
            line-height:54.9px;
        }
        @media ${device.mobileL} {
            font-size:24px;
            line-height:36.6px;
        }
    }
`

export const QuoteAuthorWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    position:absolute;
    right:0;
    bottom:0;
    @media ${device.mobileL} {
        right:32px;
    }
`

export const QuoteAuthorName = styled.div`
    margin-top:-20px;
    margin-left:16px;
    @media ${device.mobileL} {
        margin-top:-30px;
    }
    svg {
        @media ${device.mobileL} {
            width:108px;
        }
    }
    
`

export const QuoteAuthorIcon = styled.div`
    @media ${device.tablet} {
        width:80px;
    }
    @media ${device.mobileL} {
        width:40px;
    }
    img {
        border-radius:100%;
    }
`