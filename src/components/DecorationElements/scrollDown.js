import React from 'react'
import styled, {keyframes} from "styled-components"
import PropTypes from "prop-types"
import TidesIcons from "./tidesIcons"
import { device } from "../../styles/constants"
const ScrollDown = ({margin}) => {
  return  (
    <ScrollWrapper margin={margin}>
      <Centered>
        <TidesIcons type="arrowScroll" className="centered" />
      </Centered>
      <HeroScrollDown>
        <TidesIcons type="scrollDown" />
      </HeroScrollDown>
    </ScrollWrapper>       
  )
};

ScrollDown.defaultProps = {

}

ScrollDown.propTypes = {

}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HeroScrollDown = styled.div`
  position:absolute;
  svg {
      animation: ${rotation} 10s linear infinite;
  }
  
`

const ScrollWrapper = styled.div`
  margin: ${props => props.margin};
  position:relative;
  width:120px;
  height:120px;
  display:flex;
  flex-direction:column;
  align-items:center;
  jusfify-content:center;
  @media ${device.tablet} {
    display:none;
  }
`

const Centered  = styled.div`
  position:absolute;

  top:-50%;
`

  
export default ScrollDown;