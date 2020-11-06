import styled from "styled-components"


export const WrapperStory = styled.div`
    margin:80px 0;
    position:relative;
`

export const ContainerStory = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1002px;
    margin:0 auto;
`
export const TitleStory =  styled.h2`
    font-size: 60px;
    line-height:116px;
    letter-spacing: 0.05em;
    color:#E8ECF3;
    font-family:Verona Serial;
    font-weight:400;
    text-transform:uppercase;
`


export const ContentWrapper = styled.div`
    margin-top:50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    
`
export const Description = styled.div`
    width:38%;
    display:flex;
    flex-direction:column;
    align-items:center;
    p {
        text-transform:uppercase;
        font-family:Bandeins Sans;
        font-size:28px;
        line-height:36px;
        font-weight:400;
        color:#E8ECF3;
    }
    svg {
        margin:64px auto;
    }
`

export const Information = styled.div`
    width:55%;
    p {
        font-family:Bandeins Sans;
        font-size:24px;
        line-height:36px;
        font-weight:400;
        color:#E8ECF3;
    }
`