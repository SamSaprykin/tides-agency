import styled from "styled-components"
import { device } from "./constants"
export const FooterWrapper = styled.div`
    max-width:1002px;
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
        margin-top:0;
    }
    margin:0 auto;
    padding:17px 0 0;
    position:relative;
`

export const FooterTitle = styled.h3`
    font-size:60px;
    line-height:140px;
    letter-spacing:0.05em;
    color:#E8ECF3;
    font-family: Verona Serial;
    font-weight:400;
    text-transform:uppercase;
    height:140px;
    position:relative;
    overflow:hidden;
    @media ${device.laptop} {
        margin-bottom:38px;
    }
    @media ${device.tablet} {
        font-size:38px;
        line-height:116px;
        height:116px;
    }
    @media ${device.mobileL} {
        font-size:28px;
        line-height:32px;
        height:40px;
        margin-top:16px;
        margin-bottom:11px;
    }
    p {
        position:absolute;
    }
`

    

export const FooterContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-bottom:72px;
    @media ${device.laptop} {
        padding-bottom:69px;
    }
    @media ${device.mobileL} {
        padding-bottom:22px;
    }
`

export const FooterSocial = styled.ul`
    list-style:none;
    overflow: hidden;
    position: relative;
    width:160px;
    @media ${device.laptop} {
        width:206px;
    }
    @media ${device.tablet} {
        width:160px;
    }
    @media ${device.mobileL} {
        margin-bottom:16px;
    }
    li {
        margin-left:-24px;
        transition: margin-left .2s ease-in-out;
        svg {
            margin-right:8px;
        }
        :hover {
            margin-left:0;
            a {
                color:#1A6AFF;
            }
            svg {
                path {
                    fill: #1A6AFF !important;
                }
            }
        }
        a {
            display:flex;
            flex-direction:row;
            align-items:center;
            color:#E8ECF3;
            font-size:31px;
            line-height:36px;
            font-family: Bandeins Sans;
            font-weight:400;
            margin-bottom:4px;
            @media ${device.laptop} {
                font-size:20px;
                line-height:34px;
            }
            @media ${device.mobileL} {
                font-size:22px;
                line-height:28.93px;
            }
            
        }
        
    }
`

export const FooterAdress = styled.div`
    display:flex;
    flex-direction:column;
    span {
        font-size:31px;
        font-family: Bandeins Sans;
        font-weight:400;
        color:#E8ECF3;
        max-width:254px;
        margin-top:-11px;
        line-height:36px;
        @media ${device.tablet} {
            font-size:22px;
        }
    }
`



export const FooterButton = styled.button`
    width:236px;
    height:236px;
    background-color:transparent;
    border-radius: 100%;
    border:1px solid #FFCC00;
    color:#FFCC00;
    font-size:20px;
    line-height:34px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    font-family: Bandeins Sans;
    font-weight:400;
    position:relative;
    overflow:hidden;
    outline:none;
    transition: all .2s ease-in-out;
    svg {
        position:absolute;
        z-index:-10;
        opacity:0;
        transition: all .2s ease-in-out;
    }
    :hover {
        color:#191B1C;
        font-size:22px;
        width:300px;
        height:300px;
        border:none;
        transition: all .2s ease-in-out;
        svg {
            opacity:1;
        }
    }
`

export const AdressWrapper = styled.div`
    height:80px;
    position:relative;
    overflow:hidden;
    p {
        position:absolute;
    }
    @media ${device.laptop} {
        height:120px;
    }
    @media ${device.mobileL} {
        height:62px;
    }
`

export const TitleItem = styled.h5`
    color:#E8ECF3;
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    font-weight:400;
    margin-bottom:50px;
    height:34px;
    position:relative;
    overflow:hidden;
    @media ${device.tablet} {
        font-size:18px;
        line-height:34px;
    }
    @media ${device.mobileL} {
        margin-bottom:20px;
    }
    p {
        position:absolute;
    }
`

export const ClockWrapper = styled.div`
    margin-top:88px;
    color:#E8ECF3;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    @media ${device.laptop} {
        margin-top:40px;
    }
    @media ${device.tablet} {
        margin-top:32px;
    }
    span {
        font-size:20px;
        line-height:34px;
        @media ${device.tablet} {
            font-size:18px;
        }
        @media ${device.mobileL} {
            font-size:14px;
        }
    }
    
    div {
        width:200px;
        @media ${device.laptop} {
            width:140px;
        }
        @media ${device.tablet} {
            width:110px;
        }
        
        text-align:left;
        display:flex;
        
        time {
            color:#E8ECF3;
            font-size:31px;
            line-height:36px;
            font-family: Bandeins Sans;
            @media ${device.tablet} {
                font-size:22px;
            }
        }
    }
    
`


export const FooterFooter = styled.div`
    padding: 67px 0 50px;
    max-width:1002px;
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media ${device.laptopL} {
        max-width:960px;
    }
    @media ${device.laptop} {
        max-width:755px;
    }
    @media ${device.tablet} {
        max-width:588px;
    }
    @media ${device.mobileL} {
        padding:18px 20px;
        margin-top:0;
    }
`

export const BackToTop = styled.div`
    span {
        font-size:20px;
        line-height:34px;
        font-family: Bandeins Sans;
        color:#E8ECF3;
        margin-left:10px;
        @media ${device.tablet} {
            font-size:18px;
        }
        @media ${device.mobileL} {
            display:none;
        }
    }
    svg {
        transform: rotate(-90deg);
    }
`

export const RightsText = styled.p`
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    color:#E8ECF3;
    @media ${device.tablet} {
        font-size:18px;
    }
    @media ${device.mobileL} {
        font-size:14px;
        line-height:22px;
    }
`

export const TransformBorder = styled.div`
    transform:rotate(180deg);

`

export const FooterInformation = styled.div`
    width:100%;
    max-width:600px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media ${device.laptopL} {
        padding-right:64px;
    }
    @media ${device.tablet} {
        padding-right:75px;
    }
    @media ${device.mobileL} {
        flex-direction:column;
        padding-right:24px;
    }
`





