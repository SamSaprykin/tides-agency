import React, { useState, useEffect } from "react"
import { navigate } from 'gatsby'
import axios from "axios"

import { 
  WrapperFormSection,
  StyledForm,
  ContainerForm,
  TitleForm,
  StyledInput,
  StyledLabel,
  StyledTextArea,
  FooterForm,
  ServiceInputs,
  SubmitWrapper,
  StyledCheckBox,
  TitleInputs,
  CheckBoxText,
  CheckLabel,
  ButtonSubmit,
  FormTextError,
} from "../../../styles/ContactPage/sectionForm"
import BorderElement from "../../DecorationElements/borderElement"
import StainsBackgrounds from "../../DecorationElements/stainsBackgrounds"
const FormSection = ({ }) => {
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    email: "",
    details: "",
    services: [
      {value:"interface",isChecked:false},
      {value:"illustrations",isChecked:false},
      {value:"development",isChecked:false},
      {value:"branding",isChecked:false},
      {value:"animation",isChecked:false},
    ],
    language: "ENG",
  })
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    detailsError: "",
  })
  const handleOnChange = event => {
    event.persist()
    
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
    
  }

  const handleCheckChieldElement = (event) => {
    let servicesNew = inputs.services
    servicesNew.map(service => {
       if (service.value === event.target.value)
       service.isChecked = event.target.checked
    })
    setInputs({services: servicesNew})
  }
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const checkNameInput = event => {
    event.persist()
    
      if(inputs.name.length === 0) {
        setErrors(prev => ({
          ...prev,
          nameError: "Name is required "
        }))
      } else if(inputs.name.length < 3) {
        setErrors(prev => ({
          ...prev,
          nameError: "Please provide a valid name."
        }))
      } else {
        setTimeout(() => {
          setErrors(prev => ({
            ...prev,
            nameError: ""
          }))
        }, 500)
       
      }
    
  }

  const checkEmailInput = event => {
    event.persist()
    if(inputs.email.length === 0) {
      setErrors(prev => ({
        ...prev,
        emailError: "E-mail is required "
      }))
    } else if(inputs.email.length < 2 || re.test(inputs.email) === false){
      setErrors(prev => ({
        ...prev,
        emailError: "Please provide a valid e-mail address."
      }))
    } else {
      setTimeout(() => {
        setErrors(prev => ({
          ...prev,
          emailError: ""
        }))
      }, 500)
     
    }
  }

  const checkDetailsInput = event => {
    event.persist()
    if(inputs.details.length  === 0){
      setErrors(prev => ({
        ...prev,
        detailsError: "Please provide more information about your project."
      }))
    } else {
      setTimeout(() => {
        setErrors(prev => ({
          ...prev,
          detailsError: ""
        }))
      }, 500)
    }
  }
  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: `https://formspree.io/f/${process.env.GATSBY_FORMSPREE_CONTACT_FORM_ID}`,
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
        navigate('/thank-you');
        console.log(inputs)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
        console.log(r.response.data.error)
      });
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setInputs({
        name: "",
        company: "",
        email: "",
        details: "",
        services: ["","","",""]
      })
    }
  }
  return (
    <>
    
    <WrapperFormSection>
      <BorderElement />
      <ContainerForm>
        <TitleForm>Contact us</TitleForm>
        <StyledForm 
          onSubmit={handleOnSubmit}
          method="post" 
        >
          <StyledLabel>
            Your name*
            <StyledInput 
              onChange={handleOnChange}
              onBlur={checkNameInput}
              type="text" 
              name=""
              id="name" 
              placeholder="Your name..." 
              required 
            />
            <BorderElement opacity=".4"/>
            <FormTextError error={errors.nameError}><span>{errors.nameError}</span></FormTextError>
          </StyledLabel>
          <StyledLabel>
            Your company
            <StyledInput 
              onChange={handleOnChange}
              type="text" 
              id="company" 
              name="" 
              placeholder="Your company..." 
            />
            <BorderElement opacity=".4"/>
            
          </StyledLabel>
          <StyledLabel>
            Your email*
            <StyledInput 
              onChange={handleOnChange}
              onBlur={checkEmailInput}
              type="email" 
              id="email" 
              name="" 
              placeholder="Your email..." 
              required 
            />
            <BorderElement opacity=".4"/>
            <FormTextError error={errors.emailError}><span>{errors.emailError}</span></FormTextError>
          </StyledLabel>
          <StyledLabel >
            Tell us about the project*
            <StyledTextArea 
              placeholder="Details.." 
              id="details" 
              onChange={handleOnChange}
              onBlur={checkDetailsInput}
            />
            <BorderElement opacity=".4"/>
            <FormTextError error={errors.detailsError}><span>{errors.detailsError}</span></FormTextError>
          </StyledLabel>
          <FooterForm>
            <ServiceInputs>
              <TitleInputs>Service you need</TitleInputs>
              <StyledCheckBox id="interface" value="interface" onClick={handleCheckChieldElement}/>
                <CheckLabel for="interface">
                  <CheckBoxText>Interface Design</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="illustrations" value="illustrations"onClick={handleCheckChieldElement}/>
                <CheckLabel for="illustrations" >
                  <CheckBoxText>Illustrations</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="development" value="development" onClick={handleCheckChieldElement} />
                <CheckLabel for="development" >
                  <CheckBoxText>Development</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="branding" value="branding" onClick={handleCheckChieldElement}/>
                <CheckLabel for="branding" >
                  <CheckBoxText>Branding</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="animation" value="animation" onClick={handleCheckChieldElement}/>
                <CheckLabel for="animation">
                  <CheckBoxText>Animation</CheckBoxText>
                </CheckLabel>
              
            </ServiceInputs>
            <SubmitWrapper>
                <ButtonSubmit value="send"/>
            </SubmitWrapper>
            
          </FooterForm>
        </StyledForm>
      </ContainerForm>
      <StainsBackgrounds  rotate="10%" top="70%" left="-20%" height="600px"/>
    </WrapperFormSection>
    </>
  )
}



export default FormSection




