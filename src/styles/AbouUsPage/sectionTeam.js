import styled from "styled-components"
import { device } from "../constants"
export const WrapperTeam = styled.div`
    width:100%;
    max-width:1302px;
    background-color:#E8ECF3;
    margin:0 auto;
    padding: 136px 145px;
    @media ${device.laptopL} {
        max-width:960px;
        padding:100px;
    }
    @media ${device.laptop} {
        
        max-width:744px;
        padding:80px;
    }
    @media ${device.tablet} {
        max-width:728px;
        padding:72px 70px;
    }
    @media ${device.mobileL} {
        padding:0 20px;
        background-color:transparent;
    }
`

export const ContainerTeam = styled.div`
    display:flex;
    flex-direction:column;
    @media ${device.mobileL} {
        padding:27px 20px;
        background-color:#E8ECF3;
    }
`

export const TitleTeam = styled.h2`
    font-family: Verona Serial;
    font-weight:400;
    font-size:60px;
    line-height:79px;
    letter-spacing:0.05em;
    text-transform:uppercase;
    margin-bottom:38px;
    @media ${device.laptop} {
        font-size:48px;
        line-height:62px;
    }
    @media ${device.tablet} {
        font-size:38px;
        line-height:50px;
    }
    @media ${device.mobileL} {
        font-size:28px;
        line-height:40px;
        max-width:250px;
        margin-bottom:20px;
    }
`

export const TextTeam = styled.p`
    padding:50px 0 60px;
    font-size:28px;
    line-height:36px;
    color:#191B1C;
    font-family: Bandeins Sans;
    @media ${device.tablet} {
        font-size:18px;
        line-height:27.4px;
    }
    @media ${device.mobileL} {
        font-size:14px;
        line-height:25.37px;
        padding:30px 0;
    }
`

export const TeamIconsSection = styled.div`
    margin-top:40px;
    position:relative;
    height:auto;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media ${device.laptop} {
        flex-wrap:wrap;
    }
`

export const TeamIconsTitle = styled.h4`
    width:20%;
    max-width:250px;
    font-size:34px;
    line-height:38px;
    font-family: Bandeins Sans;
    font-weight:400;
    color:#191B1C;
    @media ${device.laptop} {
        width:100%;
    }
    @media ${device.mobileL} {
        font-size:28px;
        line-height:34px;
    }
    span {
        font-family: Stinger Fit;
        font-weight:400;
        text-transform:uppercase;
        color: #1A6AFF;
    }
`

export const TeamIconsContainer = styled.div`
    width:78%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:wrap;
    margin-left: -32px;
    margin-right: -32px;
    @media ${device.laptop} {
        width:100%;
        margin:32px 0 0;
    }
    
`


export const TeamIconsItem = styled.div`
    display: block;
    flex: 0 0 33%;
    max-width: 33%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom:40px;
    @media ${device.laptop} {
        align-items:center;
        text-align:center;
        margin-bottom:32px;
    }
    @media ${device.mobileL} {
        padding-left: 24px;
        padding-right: 24px;
        max-width: 50%;
        flex: 0 0 50%;
        margin-bottom:20px;
    }
    :nth-of-type(3n) {
        padding-left:5%;
    }
    img {
        height:60px;
        @media ${device.mobileL} {
            height:40px
        }
    }
    span {
        font-family: Bandeins Sans;
        text-transform: uppercase;
        font-size:19px;
        line-height:34px;
        margin-top:12px;
        @media ${device.tablet} {
            font-size:16px;
        }
        @media ${device.mobileL} {
            font-size:14px
        }
    }
`














