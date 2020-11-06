import React from 'react'
import styled from 'styled-components'
import Wave from 'react-wavify'

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
    width:100%;
    height:100vh;
    z-index:-100;
    top:0;
    left:0;
    overflow:hidden;
    div {
      position:absolute;
      z-index:-100;
    }
    .first {
      height:90%;
      bottom:10px;
      transform:rotate(-15deg) scale(1.15);
      
    }
    .second {
        height:35%;
        bottom:0;
        transform:rotate(-5deg) scale(1.15);
    }    
`
  
export default ShapeIndex;


