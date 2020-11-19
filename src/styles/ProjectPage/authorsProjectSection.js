import styled from "styled-components"
import { device } from "../constants"

export const AuthorsWrapper = styled.div`
    width:100%;
    max-width:1002px;
    margin:142px auto 107px;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    position:relative;
    @media ${device.laptopL} {
        max-width:960px;
    }
    @media ${device.laptop} {
        max-width:744px;
        margin:100px auto 70px;
    }
    @media ${device.tablet} {
        max-width:588px;
        margin:70px auto 53px;
    }
    @media ${device.mobileL} {
        padding:0 20px;
        margin-top:0;
    }
`

export const AuthorsContainer = styled.div`
    width:100%;
    max-width:731px;
    @media ${device.laptop} {
        max-width:500px;
    }
    @media ${device.tablet} {
        max-width:375px;
    }
`

export const AuthorsListTitle = styled.h5`
    font-family: Bandeins Sans;
    font-weight:400;
    font-size:20px;
    line-height:34px;
    color:#E8ECF3;
    padding-bottom:16px;
    border-bottom:1px solid #E8ECF3;
    
`

export const AuthorsList = styled.ul`
    list-style:none;
    li {
        font-family: Bandeins Sans;
        font-weight:400;
        font-size:28px;
        line-height:36px;
        color:#E8ECF3;
        padding:13px 0 11px;
        border-bottom:1px solid #E8ECF3;
        @media ${device.laptop} {
            font-size:24px;
        }
        @media ${device.tablet} {
            font-size:22px;
        }
    }
`