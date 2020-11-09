import styled from "styled-components"

export const WrapperTeam = styled.div`
    width:100%;
    max-width:1302px;
    background-color:#E8ECF3;
    padding:136px 145px;
    margin:0 auto;
`

export const ContainerTeam = styled.div`
    display:flex;
    flex-direction:column;

`

export const TitleTeam = styled.h2`
    font-family: Verona Serial;
    font-weight:400;
    font-size:60px;
    line-height:79px;
    letter-spacing:0.05em;
    text-transform:uppercase;
    margin-bottom:38px;
`

export const TextTeam = styled.p`
    padding:50px 0 60px;
    font-size:28px;
    line-height:36px;
    color:#191B1C;
    font-family: Bandeins Sans;
`

export const TeamIconsSection = styled.div`
    margin-top:40px;
    position:relative;
    height:auto;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const TeamIconsTitle = styled.h4`
    width:20%;
    max-width:250px;
    font-size:34px;
    line-height:38px;
    font-family: Bandeins Sans;
    font-weight:400;
    color:#191B1C;
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
    
    :nth-of-type(3n) {
        padding-left:5%;
    }
    svg {
        height:60px;
    }
    span {
        font-family: Bandeins Sans;
        text-transform: uppercase;
        font-size:19px;
        line-height:34px;
        margin-top:12px;
    }
`














