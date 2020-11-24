import React from 'react'
import styled from 'styled-components'
import Wave from 'react-wavify'
import { device } from "../../styles/constants"
const ShapeIndex = () => {
  return  (
    <ShapeContainer>
        <Wave fill='#1A6AFF'
        className="first"
        paused={false}
          options={{
            height: 92,
            amplitude: 80,
            speed: 0.2,
            points: 9
          }}
        />
        <Wave fill='#191B1C'
        className="second"
        paused={false}
          options={{
            height: 60,
            amplitude: 40,
            speed: 0.27,
            points: 9
          }}
        >
        </Wave>
    </ShapeContainer>
            
  )
};

const ShapeContainer = styled.div`
    position:absolute;
    width:110%;
    height:100vh;
    z-index:-100;
    top:0;
    left:0;
    overflow:hidden;
    @media ${device.laptop} {
      width:200%;
      height:80vh;
    }
    @media ${device.tablet} {
      height:50vh;
    }
    @media ${device.mobileL} {
      height:50vh;
    }
    div {
      position:absolute;
      z-index:-100;
    }
    .first {
      height:90%;
      bottom:10px;
      transform:rotate(-15deg) scale(1.15);
      @media ${device.tablet} {
        height:100%;
        bottom:100px;
      }
      @media ${device.mobileL} {
        height:120%;
        bottom:10px;
      }
    }
    .second {
        height:35%;
        bottom:0;
        transform:rotate(-5deg) scale(1.15);
        @media ${device.tablet} {
          height:55%;
        }
    }    
`
  
export default ShapeIndex;


