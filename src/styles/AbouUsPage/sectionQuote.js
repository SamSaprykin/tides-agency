import styled from "styled-components"

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
    margin-top:55px;
    padding-bottom:30px;
`

export const QuoteTitle  = styled.h5`
    font-family:Bandeins Sans;
    font-size:18px;
    line-height:36px;
    font-weight:400;
    color:#E8ECF3;
    text-transform:uppercase;
    margin-left:30px;
`

export const ContentContainer = styled.div`
    padding-top:87px;
    position:relative;
    max-width:1002px;
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
    svg {
        position:absolute;
        top:150px;
        left:330px;
    }
        
    
    span {
        color:#1A6AFF;
        font-family: Stinger Fit;
        font-weight:400;
        font-size:60px;
        line-height:123.8%;
        svg {
            position:absolute;
            left:0;
            top:40px;
            z-index:-1;
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
`

export const QuoteAuthorName = styled.div`
    margin-top:-20px;
    margin-left:16px;
`

export const QuoteAuthorIcon = styled.div`
    img {
        border-radius:100%;
    }
`