import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Clock from 'react-live-clock'

import StainsBackground from "./DecorationElements/stainsBackgrounds"

import { 
   FooterWrapper,
   FooterTitle,
   FooterContentWrapper,
   FooterSocial,
   FooterAdress,
   FooterButton,
   TitleItem,
   ClockWrapper,
  } from "../styles/footer"

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTitle>
                Contact
            </FooterTitle>
            <FooterContentWrapper>
                <FooterSocial>
                    <TitleItem>
                        Social Media
                    </TitleItem>
                    <li>
                        <a href="https://dribbble.com/" target="_blank">
                          Dribbble
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/" target="_blank">
                          Behance
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/" target="_blank">
                          Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/" target="_blank">
                          Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/" target="_blank">
                          Twitter
                        </a>
                    </li>
                </FooterSocial>
                <FooterAdress>
                    <TitleItem>
                      Address
                    </TitleItem>
                    <span>
                        260 N.Orange Ave
                        Orlando, Fl 32801
                    </span>
                    <ClockWrapper>
                        <div>
                            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
                        </div>
                      
                        <span>local time</span>
                    </ClockWrapper>
                </FooterAdress>
                <FooterButton>
                    say hello
                </FooterButton>
            </FooterContentWrapper>
            <StainsBackground rotate="-10deg" top="-50%" left="1%" height="400px"/>
        </FooterWrapper>
    )
}

export default Footer