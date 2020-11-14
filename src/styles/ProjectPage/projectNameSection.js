import styled from "styled-components"
import { device } from "../constants"

export const ProjectNameWrapper = styled.div`
    max-width:1302px;
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:247px 0 116px;
    position:relative;
`

export const ProjectNameTitle = styled.h2`
    font-size:96px;
    line-height:140px;
    letter-spacing:0.05em;
    font-family:Verona Serial;
    color:#E8ECF3;
    font-weight:400;
    text-transform:uppercase;
    @media ${device.tablet} {
        font-size:46px;
        line-height:58.5px;
    }
`