import styled, { keyframes }  from "styled-components"
import { device } from "../constants"

export const SubscribeWrapper = styled.div`
    padding:150px 0;
    margin:0 auto;
    width:100%;
    overflow:hidden;
    position:relative;
    @media ${device.tablet} {
        padding:100px 0 80px;
    }
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
    animation: ${marquee} 30s linear infinite;
    @media ${device.laptopL} {
        font-size:80px;
        line-height:58.5px;
        -webkit-text-stroke: 1.5px #E8ECF3;
      }
      @media ${device.laptop} {
          font-size:56px;
          line-height:58.5px;
      }
      @media ${device.tablet} {
        font-size:50px;
        width:500vw;
        -webkit-text-stroke: 1px #E8ECF3;
        top:45%;
      }
      @media ${device.mobileL} {
        font-size:32px;
    }
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



export const FormCta = styled.div`
    padding:60px 40px;
    background-color: #E8ECF3;
    
    h5 {
        color: #191B1C;
        font-family: Bandeins Sans;
        font-weight:400;
        font-size:31px;
        line-height:36px;
        height:80px;
        position:relative;
        overflow:hidden;
        p {
            position:absolute;
        }
    }
`


export const InputContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    height:auto;
    background-color:#1A6AFF;
    position:relative;
    height:126px;
    
    button {
        margin-right:46px;
        width:24px;
        height:24px;
        position:absolute;
        top:50%;
        right:0px;
        transform: translate(0,-50%);
        background-color:transparent;
        outline:none;
        border:none;
    }
`


export const StyledInput = styled.input`
    width:70%;
    background-color:#1A6AFF;
    border:none;
    outline:none;
    margin:45px 40px 40px;
    font-size:31px;
    line-height:36px;
    font-family: Bandeins Sans;
    color:#E8ECF3;
    font-weight:400;
    padding-bottom:4px;
    box-sizing:border-box;
    
    
`

export const InputBorder = styled.div`
    width:0;
    height:4px;
    background-color:#FFCC00;
    position:absolute;
    bottom:0;
    left:0;
    transition: width .5s ease-in-out;
    ${InputContainer} :hover & {
        width:100%;
    }
`

export const FormTextError = styled.div`
  height:40px;
  position:relative;
  overflow:hidden;
  margin-top:12px;
  span {
      color:#FA4E4E;
      bottom: ${({ error }) => {
        if (error === "") return "26px"
        if (error !== "") return "0"
      }};
      opacity: ${({ error }) => {
        if (error === "") return "0"
        if (error !== "") return "1"
      }};
      display:block;
      position:absolute;
      transition: all 1s ease-in-out;

      font-size:22px;
  }
`


