import styled from "styled-components"

export const WrapperDifferent = styled.div`
    width:100%;
    max-width:1002px;
    padding:119px 0 107px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
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
    }
    p {
        font-family: Bandeins Sans;
        font-size:28px;
        line-height:36px;
        color:#E8ECF3;
        font-weight:400;
        text-transform:uppercase;
        max-width:756px;
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
    span {
        text-decoration:underline;
        margin-right:8px;
    }

`