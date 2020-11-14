import styled from "styled-components"
import { device } from "../constants"
export const ServicesProjectWrapper = styled.div`
    width:100%;
    max-width:1002px;
    margin:0 auto 230px;
    position:relative;
    @media ${device.tablet} {
        max-width:588px;
        margin:0 auto 130px;
    }
`

export const TitleImage = styled.div`
    width:100%;
    height:auto;
`



export const InformationWrapper = styled.div`
    margin-top:70px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    ul {
        
        li {
            font-family:Bandeins Sans;
            font-size:28px;
            line-height:36px;
            font-weight:400;
            color:#E8ECF3;
            padding:13px 0 11px;
            border-bottom:1px solid #E8ECF3;
            @media ${device.tablet} {
                font-size:22px;
            }
        }
    }
`

export const ServicesListWrapper = styled.div`
    width:47%;
`

export const AwardsListWrapper = styled.div`
    width:47%;
`

export const ServicesList = styled.ul`
    list-style:none;
`

export const AwardsList = styled.ul`
    list-style:none;
`

export const ListTitle = styled.h5`
    font-family:Bandeins Sans;
    font-size:20px;
    line-height:34px;
    font-weight:400;
    color:#E8ECF3;
    @media ${device.tablet} {
        font-size:18px;
    }
`