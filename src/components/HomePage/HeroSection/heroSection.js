import React, {useRef, useEffect} from "react"
import TidesIcons from "../../DecorationElements/tidesIcons"
import ShapeIndex from "../../DecorationElements/shapeIndex"
import ScrollDown from "../../DecorationElements/scrollDown"

import { 
    HeroLayout,
    HeroText,
    WordsWrapper,
} from "../../../styles/IndexPage/heroSection"

import {
  staggerLinksHero
} from '../../animate'

const HeroSection = ({ }) => {
  let text1 = useRef(null)
  let text2 = useRef(null)
  let text3 = useRef(null)
  let text4 = useRef(null)
  

  useEffect(() => { 
    staggerLinksHero(text1, text2, text3, text4);
  },[])
  
  return (
  <>
    <HeroLayout id="hero-section">
      <HeroText> 
          <ul>
            <WordsWrapper >
              <li ref={(el) => (text1 = el)}>We help startups 	&amp;</li>
            </WordsWrapper >
            <WordsWrapper >
              <li ref={(el) => (text2 = el)}>private equity</li>
            </WordsWrapper>
            <WordsWrapper >
              <li ref={(el) => (text3 = el)}>backed companies</li>
            </WordsWrapper>
            <WordsWrapper >
              <li ref={(el) => (text4 = el)}>
                grow their revenue
                <TidesIcons type="waveTextDecoration" />
              </li>
             
            </WordsWrapper>
          </ul>
          <ShapeIndex />
      </HeroText>
      <ScrollDown margin='100px 0 0'/>
    </HeroLayout>
  </>
  )
}
  




export default HeroSection
