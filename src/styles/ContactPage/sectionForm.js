import styled from "styled-components"

export const WrapperFormSection = styled.div`
    max-width:1002px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    color:#E8ECF3;
    position:relative;
`

export const ContainerForm = styled.div`
    display:flex;
    flex-direction:row;
    margin:31px 0 150px;
    justify-content:space-between;
`

export const TitleForm = styled.h5`
    color:#E8ECF3;
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    font-weight:400;
    width:20%;
`

export const StyledForm = styled.form`
    margin-top:70px;
    width:100%;
    max-width:731px;
    
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
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size:80px;
        font-family: Bandeins Sans;
        font-weight:400;
        opacity:0.4;
        -webkit-text-stroke: 1px #E8ECF3;
        color:transparent;
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
    
`

export const StyledTextArea = styled.textarea`
    background-color:transparent;
    outline:none;
    border:none;
    color:#E8ECF3;
    padding:30px 0;
    width:100%;
    margin-top:40px;
    caret-color: #1A6AFF
    font-size:24px;
    line-height:34px;
    color:#E8ECF3;
    caret-color: #1A6AFF;
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size:80px;
        font-family: Bandeins Sans;
        font-weight:400;
        opacity:0.4;
        -webkit-text-stroke: 1px #E8ECF3;
        color:transparent;
    }
`

export const FooterForm = styled.div`
    margin-top:72.5px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    
` 


export const SubmitWrapper = styled.div`

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
`

export const CheckBoxText = styled.h3`
    font-size:18px;
    line-height:34px;
    font-family:Bandeins Sans;
    font-weight:400;
    color: #E8ECF3;

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
`

export const SuccessForm = styled.h4`
  color: #219653;
  font-family: FreightSans;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  height: 100%;
  padding: 60% 10% 0;
  background-color: ${props => props.successBg};
  z-index: ${({ successBg }) => {
    if (successBg === "") return "-20"
    if (successBg !== "") return "501"
  }};
  position: absolute;
  top: 0;
  right: 0;
  ::before {
    content: "";
    position: absolute;
    transform: rotate(45deg);
    width: 48px;
    height: 72px;
    top: 20%;
    display: ${({ successBg }) => {
      if (successBg === "") return "none"
      if (successBg !== "") return " inline-block"
    }};
    border-bottom: 9px solid #219653;
    border-right: 9px solid #219653;
    left: 50%;
    margin-left: -20px;
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