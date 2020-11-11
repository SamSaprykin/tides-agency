import React from "react"
import Clock from 'react-live-clock'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import StainsBackground from "./DecorationElements/stainsBackgrounds"

import TidesIcons from "../components/DecorationElements/tidesIcons"

import { 
   FooterWrapper,
   FooterTitle,
   FooterContentWrapper,
   FooterSocial,
   FooterAdress,
   FooterButton,
   TitleItem,
   ClockWrapper,
   FooterFooter,
   BackToTop,
   RightsText,
   TransformBorder,
   AdressWrapper,
   ButtonContainer,
  } from "../styles/footer"

import AnimBorder from "./borderAnimation"
import BorderElement from "./DecorationElements/borderElement"
import AnimParagraph from "./animateParagraph"
import AnimSmall from "./animSmall"
import AnimButton from "./animateButton"
const Footer = () => {
    return (
        <>
        <FooterWrapper>
            <AnimBorder>
                <BorderElement padding="0 0 20px"/>
            </AnimBorder>
            <FooterTitle>
                <AnimParagraph>
                Contact
                </AnimParagraph>
            </FooterTitle>
            <FooterContentWrapper>
                <FooterSocial>
                    <TitleItem>
                        <AnimSmall delay={0}>
                        Social Media
                        </AnimSmall>
                    </TitleItem>
                    <li>
                        <AnimSmall delay={.1}>
                            <a href="https://dribbble.com/" target="_blank">
                            <TidesIcons type="arrowButton"  />
                            Dribbble
                            </a>    
                        </AnimSmall>
                    </li>
                    <li>
                        <AnimSmall delay={.2}>
                            <a href="https://dribbble.com/" target="_blank">
                            <TidesIcons type="arrowButton"  />
                            Behance
                            </a>
                        </AnimSmall>
                    </li>
                    <li>
                        <AnimSmall delay={.3}>
                            <a href="https://dribbble.com/" target="_blank">
                            <TidesIcons type="arrowButton"  />
                            Instagram
                            </a>
                        </AnimSmall>
                    </li>
                    <li>
                        <AnimSmall delay={.4}>
                            <a href="https://dribbble.com/" target="_blank">
                            <TidesIcons type="arrowButton"  />
                            Facebook
                            </a>
                        </AnimSmall>
                    </li>
                    <li>
                        <AnimSmall delay={.5}>
                            <a href="https://dribbble.com/" target="_blank">
                            <TidesIcons type="arrowButton"  />
                            Twitter
                            </a>
                        </AnimSmall>
                    </li>
                </FooterSocial>
                <FooterAdress>
                    <TitleItem>
                        <AnimSmall delay={0}>
                            Address
                        </AnimSmall>
                    </TitleItem>

                    <AdressWrapper>
                        <AnimParagraph>
                            <span>
                                260 N.Orange Ave
                                Orlando, Fl 32801
                            </span>
                        </AnimParagraph>
                    </AdressWrapper>
                    <AnimSmall delay={.2}>
                        <ClockWrapper>
                            <div>
                                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
                            </div>
                            <span>local time</span>
                        </ClockWrapper>
                    </AnimSmall>
                    
                </FooterAdress>
                <ButtonContainer>
                    <AnimButton>
                        <FooterButton>
                            say hello
                            <TidesIcons type="blobButton" /> 
                        </FooterButton>
                    
                    </AnimButton>
                </ButtonContainer>
                
            </FooterContentWrapper>
            <TransformBorder>
                <AnimBorder>
                    <BorderElement />
                </AnimBorder>
            </TransformBorder>
            <StainsBackground rotate="-10deg" top="-50%" left="1%" height="400px"/>
            
        </FooterWrapper>
        <FooterFooter>
            <BackToTop>
                <AnchorLink to="/#hero-section" title="Our team">
                        <TidesIcons type="arrowButton" />
                        <span>Back to Top</span>
                </AnchorLink>
            </BackToTop>
            <RightsText>
                    &copy; 2020 Tides Agency. All Rights Reserved.
            </RightsText>
            
        </FooterFooter>
     </>
    )
}

export default Footer