import React, {useState} from "react"
import styled from "styled-components"

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
} from "../../../styles/IndexPage/heroSection"

const HeroSection = ({ }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
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
  return (
  <>
    <HeroLayout>
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
            <li>We help startups 	&amp;</li>
            <li>private equity</li>
            <li>backed companies</li>
            <li>grow their revenue</li>
            <TidesIcons type="waveTextDecoration" />
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
