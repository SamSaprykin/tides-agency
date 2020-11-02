import styled, { keyframes }  from "styled-components"


export const SubscribeWrapper = styled.div`
    padding:150px 0;
    margin:0 auto;
    width:100%;
    overflow:hidden;
    position:relative;
`

const marquee = keyframes`
    from { transform: translate3d(calc(-5% + 10vw), -50%, 0) }
    to   { transform: translate3d(calc(-80% + 10vw), -50%, 0); }
`;

export const SubscribeMarque = styled.h5`
    -webkit-text-stroke: 2px #E8ECF3;
    font-family: Verona Serial;
    text-transform:uppercase;
    font-size:96px;
    line-height:140px;
    color:transparent;
    width:400vw;
    padding:30px 0 14px !important;
    left:0;
    text-align:left;
    box-sizing: border-box;
    position:absolute;
    z-index:1;
    top:50%;
    animation: ${marquee} 18s linear infinite;
`
export const SubscribeForm = styled.form`
    margin:0 auto;
    width:100%;
    max-width:500px;
    display:flex;
    flex-direction:column;
    position:relative;
    z-index:2;
   
`

export const StyledInput = styled.input`
    width:100%;
    background-color:#1A6AFF;
    border:none;
    outline:none;
    padding:45px 40px;
    font-size:31px;
    line-height:36px;
    font-family: Bandeins Sans;
    color:#E8ECF3;
    font-weight:400;
`

export const FormCta = styled.div`
    padding:60px 40px;
    background-color: #E8ECF3;
    color: #191B1C;
    font-family: Bandeins Sans;
    font-weight:400;
    font-size:31px;
    line-height:36px;
`


export const InputContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:auto;
    background-color:#1A6AFF;
    position:relative;
    button {
        margin-right:46px;
        width:32px;
        position:absolute;
        top:50%;
        right:0px;
        transform: translate(0,-50%);
        background-color:transparent;
        outline:none;
        border:none;
    }
`

