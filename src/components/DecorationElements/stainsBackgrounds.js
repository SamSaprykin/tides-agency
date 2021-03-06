import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"
import { device } from "../../styles/constants"

const StainsBackgrounds = ({
   top,left,height,rotate
}) => {

  return  (
    <BackWrapper top={top} left={left} rotate={rotate}>
        <img src="/stains_background.svg" height={height}/>
    </BackWrapper>
  )
        
};

StainsBackgrounds.propTypes = {
  top: PropTypes.string, // 'left', 'center', 'right', 'justify'
  left: PropTypes.string,
  height: PropTypes.string,
  rotate: PropTypes.string,
}

StainsBackgrounds.defaultProps = {
  top: "0%",
  left: "0%",
  height: "300px",
  rotate: "0",
}

const BackWrapper = styled.div`
   position:absolute;
   height:auto;
   left:${props => props.left};
   top:${props => props.top}; 
   transform: rotate(${props => props.rotate});
   
   img {
       width:100%;
       max-width:800px;
       height: ${props => props.height};
       @media ${device.desktop} {
        max-width:600px;
        height:auto;
       }
       @media ${device.laptop} {
        max-width:600px;
        height:auto;
       }
       @media ${device.tablet} {
        max-width:400px;
        height:auto;
       }
       @media ${device.mobileL} {
        max-width:280px;
       }
       @media ${device.mobileM} {
        max-width:280px;
       }
   }
   z-index:-10;
`
  
export default StainsBackgrounds;