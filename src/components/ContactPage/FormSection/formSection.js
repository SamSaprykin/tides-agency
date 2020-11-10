import React, { useState, useEffect } from "react"
import styled from "styled-components"
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
  SuccessForm,
  FormTextError,
} from "../../../styles/ContactPage/sectionForm"
import BorderElement from "../../DecorationElements/borderElement"
import StainsBackgrounds from "../../DecorationElements/stainsBackgrounds"
const FormSection = ({ }) => {
  const [successForm, setSuccessForm] = useState("")
  const [successBg, setSuccessBg] = useState("")
  const [errorForm, setErrorForm] = useState("")
  const [errorBg, setErrorBg] = useState("")
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    email: "",
    details: "",
    language: "ENG",
  })
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    detailsError: "",
  })
  const handleOnChange = event => {
    event.persist()
    setSuccessForm("")
    setErrorForm("")
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
      
    }))
    
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
  const onFinish = (values,event) => {
    event.preventDefault();
  }

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
          onFinish={onFinish}
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
              <StyledCheckBox id="interface" />
                <CheckLabel for="interface">
                  <CheckBoxText>Interface Design</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="illustrations" />
                <CheckLabel for="illustrations" >
                  <CheckBoxText>Illustrations</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="development" />
                <CheckLabel for="development" >
                  <CheckBoxText>Development</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="branding" />
                <CheckLabel for="branding" >
                  <CheckBoxText>Branding</CheckBoxText>
                </CheckLabel>
              
              <StyledCheckBox id="animation" />
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
      <SuccessForm successBg={successBg}>{successForm}</SuccessForm>
    </WrapperFormSection>
    </>
  )
}



export default FormSection



/*
 setServerState({ submitting: true })
    axios({
      method: "POST",
      url: `https://formspree.io/....`,
      data: inputs,
    })
      .then(r => {
        handleServerResponse(true, "Thanks!")
        
        setSuccessForm(
          "Thank you for your request. We will get back to you as soon as possible to answer your question!"
        )
        
        setTimeout(() => {
          setSuccessForm("")
          setSuccessBg("")
        }, 4000)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error)
        setErrorForm(
          "Oops! Something went wrong with your submission, please try again."
        )
        
        setTimeout(() => {
          setErrorForm("")
          setErrorBg("")
        }, 2000)
      })

  const [successForm, setSuccessForm] = useState("")
  const [successBg, setSuccessBg] = useState("")
  const [errorForm, setErrorForm] = useState("")
  const [errorBg, setErrorBg] = useState("")
  // Input Change Handling
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    email: "",
    moreAboutProject: "",
    language: "ENG",
  })
  const handleOnChange = event => {
    event.persist()
    setSuccessForm("")
    setErrorForm("")
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }
  const onFinish = values => {
    event.preventDefault()

    setServerState({ submitting: true })
    axios({
      method: "POST",
      url: `https://formspree.io/....`,
      data: inputs,
    })
      .then(r => {
        handleServerResponse(true, "Thanks!")
        
        setSuccessForm(
          "Thank you for your request. We will get back to you as soon as possible to answer your question!"
        )
        setSuccessBg("rgba(221,238,229, 0.9)")
        setTimeout(() => {
          setSuccessForm("")
          setSuccessBg("")
        }, 4000)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error)
        setErrorForm(
          "Oops! Something went wrong with your submission, please try again."
        )
        setErrorBg("rgba(238,220,226, 0.9)")
        setTimeout(() => {
          setErrorForm("")
          setErrorBg("")
        }, 4000)
      })
  }
  // Server State Handling
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
        moreAboutProject: "",
      })
    }
  }




*/