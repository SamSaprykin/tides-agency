import React from 'react'
import styled, {keyframes} from "styled-components"
import { device } from "../../styles/constants"

const MarqueRow = ({textMarque}) => {
  return  (
    <StyledMarque>
          {textMarque}
    </StyledMarque>      
  )
};

MarqueRow.defaultProps = {

}

MarqueRow.propTypes = {

}

const marquee = keyframes`
    from { transform: translate3d(calc(-5% + 10vw), -50%, 0) }
    to   { transform: translate3d(calc(-80% + 10vw), -50%, 0); }
`;

const StyledMarque = styled.h5`
    -webkit-text-stroke: 2px #E8ECF3;
    font-family: Verona Serial;
    text-transform:uppercase;
    font-size:96px;
    line-height:140px;
    color:transparent;
    width:400vw;
    padding:30px 0 14px !important;
    left:0;
    text-align:left;
    box-sizing: border-box;
    position:absolute;
    z-index:1;
    top:60px;
    animation: ${marquee} 30s linear infinite;
    @media ${device.tablet} {
      font-size:60px;
      width:500vw;
      -webkit-text-stroke: 1px #E8ECF3;
    }
`

  
export default MarqueRow;