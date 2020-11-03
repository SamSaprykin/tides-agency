import React, {useState, useRef, useEffect} from "react"


import TidesIcons from "../../DecorationElements/tidesIcons"
import Navigation from "../../Navigation/navigation"
import ShapeIndex from "../../DecorationElements/shapeIndex"

import { 
    HeroLayout,
    HeroNavWrapper,
    HeroLogo,
    HeroMenuButtonWrapper,
    HeroText,
    HeroScrollDown,
    LogoImage,
    ButtonMenu,
    IconWaveWrapper,
    WordsWrapper,
} from "../../../styles/IndexPage/heroSection"

import {
  staggerLinksHero
} from '../../animate'

const HeroSection = ({ }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  let text1 = useRef(null)
  let text2 = useRef(null)
  let text3 = useRef(null)
  let text4 = useRef(null)
  // State of our button
  const [hovered, setHovered] = useState(false);

  const onMouseEnterHandler = () => {
    setHovered(true)
  }

  
  const onMouseLeaveHandler = () => {
      const timeout = setTimeout(() => {
        setHovered(false);
      }, 400);
  }

  
  //toggle menu
  const handleMenu = () => {
    
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };
  useEffect(() => { 
    staggerLinksHero(text1, text2, text3, text4);
  },[])
  
  return (
  <>
    <HeroLayout id="hero-section">
      <HeroNavWrapper>
        <HeroLogo>
          <LogoImage src="/logo.png" />
        </HeroLogo>
        <HeroMenuButtonWrapper>
          <ButtonMenu 
            onClick={handleMenu}
            onMouseOver={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            <span>Menu</span>
            <IconWaveWrapper
              
              hovered={hovered}
            >
              <TidesIcons type="wavewMenuIcon" />
            </IconWaveWrapper>
           
          </ButtonMenu>
          
        </HeroMenuButtonWrapper>
      </HeroNavWrapper>
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
      <HeroScrollDown>
        <TidesIcons type="scrollDown" />
      </HeroScrollDown>
    </HeroLayout>
    <Navigation state={state} setState={setState} />
  </>
  )
}
  




export default HeroSection
