import React, {useState} from "react"
import { navigate } from 'gatsby'
import axios from "axios"
import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    SubscribeWrapper,
    SubscribeMarque,
    SubscribeForm,
    InputContainer,
    StyledInput,
    InputBorder,
    FormCta,
    FormTextError
} from "../../../styles/IndexPage/subscribeSection"

import AnimParagraph from "../../animateParagraph"


const SubscribeSection = ({data}) => {
  console.log(process.env.GATSBY_FORMSPREE_SUBSCRIBE_FORM_ID)
  const [inputs, setInputs] = useState({
    email: "",
  })
  const [errors, setErrors] = useState({
    emailError: "",
  })
  const handleOnChange = event => {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
    
  }
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    console.log(inputs)
    axios({
      method: "POST",
      url: `https://formspree.io/f/${process.env.GATSBY_FORMSPREE_SUBSCRIBE_FORM_ID}`,
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
        email: "",
      })
    }
  }
  return (
    <SubscribeWrapper>
        <SubscribeMarque>
          {data.runnerText}
        </SubscribeMarque>
        <SubscribeForm 
          onSubmit={handleOnSubmit}
          method="post"
        >
          <FormCta>
            <h5>
              <AnimParagraph>
                <div dangerouslySetInnerHTML={{ __html: `<div> ${data.titleSubscribeForm.titleSubscribeForm} </div>` }} />
              </AnimParagraph>
            </h5>
          </FormCta>
          <InputContainer>
            <StyledInput 
              placeholder="Your E-mail" 
              onChange={handleOnChange}
              onBlur={checkEmailInput}
              type="email" 
              id="email" 
            />
            <button type="submit" >
              <TidesIcons type="arrowForm" />
            </button>
            <InputBorder />
          </InputContainer>
          <FormTextError error={errors.emailError}><span>{errors.emailError}</span></FormTextError>
        </SubscribeForm>
    </SubscribeWrapper>
    
    
  )
}
  




export default SubscribeSection
