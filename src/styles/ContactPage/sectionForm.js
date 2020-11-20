import styled from "styled-components"
import { device } from "../constants"

export const WrapperFormSection = styled.div`
    max-width:1002px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    color:#E8ECF3;
    position:relative;
    @media ${device.laptopL} {
        max-width:960px;
    }
    @media ${device.laptop} {
        max-width:744px;
    }
    @media ${device.tablet} {
        max-width:588px;
    }
    @media ${device.mobileL} {
        
        padding:0 20px;
    }
`

export const ContainerForm = styled.div`
    display:flex;
    flex-direction:row;
    margin:31px 0 150px;
    justify-content:space-between;
    @media ${device.mobileL} {
        flex-direction:column;
    }
`

export const TitleForm = styled.h5`
    color:#E8ECF3;
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    font-weight:400;
    width:20%;
    @media ${device.mobileL} {
        width:100%;
    }
`

export const StyledForm = styled.form`
    margin-top:70px;
    width:100%;
    max-width:731px;
    @media ${device.tablet} {
        max-width:456px;
        margin-top:50px;
    }
    @media ${device.mobileL} {
        margin-top:0px;
    }
`

export const StyledInput = styled.input`
    background-color:transparent;
    outline:none;
    border:none;
    color:#E8ECF3;
    padding:38px 0;
    font-size:42px;
    line-height:80px;
    font-family: Bandeins Sans;
    font-weight:400;
    caret-color: #1A6AFF;
    margin-top:40px;
    @media ${device.tablet} {
        margin-top:0;
        font-size:34px;
        line-height:42px;
    }
    @media ${device.mobileL} {
        font-size:24px;
        line-height:38px;
        padding-bottom:18px;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size:80px;
        font-family: Bandeins Sans;
        font-weight:400;
        opacity:0.4;
        -webkit-text-stroke: 1px #E8ECF3;
        color:transparent;
        @media ${device.tablet} {
            font-size:62px;
        }
        @media ${device.mobileL} {
            font-size:42px;
            line-height:42px;
        }
    }
`

export const StyledLabel = styled.label`
    display:flex;
    flex-direction:column;
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    font-weight:400;
    margin-top:70px;
    @media ${device.tablet} {
        margin-top:50px;
    }
    @media ${device.mobileL} {
        margin-top:19px;
    }
`

export const StyledTextArea = styled.textarea`
    background-color:transparent;
    outline:none;
    border:none;
    color:#E8ECF3;
    padding:30px 0;
    width:100%;
    margin-top:40px;
    font-size:24px;
    line-height:34px;
    color:#E8ECF3;
    caret-color: #1A6AFF;
    @media ${device.tablet} {
        margin-top:0;
        font-size:34px;
        line-height:42px;
    }
    @media ${device.mobileL} {
        font-size:24px;
        line-height:38px;
        padding-bottom:18px;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size:80px;
        font-family: Bandeins Sans;
        font-weight:400;
        opacity:0.4;
        -webkit-text-stroke: 1px #E8ECF3;
        color:transparent;
        @media ${device.tablet} {
            font-size:62px;
        }
        @media ${device.mobileL} {
            font-size:42px;
            line-height:42px;
        }
    }
`

export const FooterForm = styled.div`
    margin-top:72.5px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media ${device.tablet} {
        margin-top:10px;
    }
    @media ${device.mobileL} {
        flex-direction:column;
    }
` 


export const SubmitWrapper = styled.div`
    display:flex;
    flex-direction:column;
    @media ${device.tablet} {
        justify-content:flex-end;
    }
    
`


export const CheckLabel = styled.label`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
    width:168px !important;
    height:55px !important;
    border:1px solid #E8ECF3;
    border-radius:27.5px !important;
    margin:0 20px 40px 0;
    transition: all .2s ease-in-out;
    
    :hover {
        opacity:0.4;
    }
    @media ${device.tablet} {
        width:146px !important;
        height:48px !important;
        margin:0 15px 26px 0;
    }
    
`

export const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
    margin-right:20px;
    display: none;
    &:checked + ${CheckLabel} {
        background: #1A6AFF;
        border:1px solid #1A6AFF;
        :hover {
            opacity:1;
        }
    }
`


export const ServiceInputs = styled.div`
    width:100%;
    max-width:400px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    
`



export const TitleInputs = styled.h5`
    width:100%;
    color: #E8ECF3;
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    font-weight:400;
    margin-bottom:32px;
    @media ${device.tablet} {
        font-size:18px;
    }
`

export const CheckBoxText = styled.h3`
    font-size:18px;
    line-height:34px;
    font-family:Bandeins Sans;
    font-weight:400;
    color: #E8ECF3;
    @media ${device.tablet} {
        font-size:14px;
    }
`

export const ButtonSubmit = styled.input.attrs({ type: 'submit' })`
    width:236px;
    height:236px;
    border-radius:100%;
    background-color:#FFCC00;
    outline:none;
    border:none;
    text-transform:uppercase;
    font-family:Bandeins Sans;
    font-weight:400;
    font-size:20px;
    line-height:34px;
    margin-top:68px;
    @media ${device.tablet} {
        width:122px;
        height:122px;
        font-size:14px;
        margin-bottom:26px;
    }
    @media ${device.mobileL} {
        margin:0 auto;
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