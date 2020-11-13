import styled from "styled-components"

export const AuthorsWrapper = styled.div`
    width:100%;
    max-width:1002px;
    margin:142px auto 107px;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    position:relative;
`

export const AuthorsContainer = styled.div`
    width:100%;
    max-width:731px;
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
    }
`