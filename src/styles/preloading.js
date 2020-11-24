import styled from "styled-components"
import { device } from "./constants"

export const WrapperPreloading = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    background-color:#191B1C;
    z-index:100;
    @media ${device.tablet} {
        height:100vh;
    }
    @media ${device.mobileL} {
        height:100vh;
    }
`

export const ListItem = styled.li`
    margin:0;
    padding:0;
    background-color:#1A6AFF;
    display:block;
    margin-bottom:-1px;
`

export const ListPreloading = styled.ul`
    list-style:none;
    position:absolute;
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    margin:0;
    justify-content:space-between;
`
