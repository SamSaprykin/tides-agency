import React, {useRef, useEffect} from "react"
import styled from "styled-components";
import anime from 'animejs'


let shapes = [
  "M1234.75 0C1284.75 0 1210.59 240.013 957.75 170.345C666.75 212.393 615 309.765 542.25 371.798C469.5 433.83 327.202 493.065 171.75 476.797C83.4073 467.557 0.0449219 316.463 -0.00012207 316.2V716.475C-0.00012207 716.475 189.75 604.995 292.882 697.725C319.132 721.35 338.865 753.84 347.295 773.227C352.74 785.886 361.768 796.677 373.266 804.273C384.764 811.868 398.232 815.937 412.012 815.977H413.22C441.592 815.977 467.077 798.818 478.237 772.545C497.325 727.605 545.04 683.775 662.257 683.775C790.342 683.775 855.757 687.668 995.257 563.025C1134.76 438.383 1440.01 552.09 1440.01 552.09V0.105L1284.75 0Z",
  "M1284.75 0C1284.75 0 1218.59 221.013 917.75 240.345C666.75 212.393 615 309.765 542.25 371.798C469.5 433.83 327.202 493.065 171.75 476.797C83.4073 467.557 0.0449219 316.463 -0.00012207 316.2V716.475C-0.00012207 716.475 117.868 623.745 221 716.475C247.25 740.1 266.982 772.59 275.412 791.977C280.858 804.636 289.885 815.427 301.383 823.023C312.882 830.618 326.349 834.687 340.13 834.727H341.338C369.71 834.727 478.237 772.545 478.237 772.545C478.237 772.545 587.283 716.475 704.5 716.475C832.585 716.475 956.5 767.643 1096 643C1235.5 518.357 1440.01 552.09 1440.01 552.09V0.105L1284.75 0Z",
  "M1284.75 0C1284.75 0 1220.59 190.013 957.75 240.345C666.75 212.393 474.75 277.967 402 340C329.25 402.033 324.953 465.767 169.5 449.5C81.1575 440.26 0.0454102 316.463 0.000366211 316.2V716.475C0.000366211 716.475 117.868 623.745 221 716.475C247.25 740.1 266.983 772.59 275.413 791.977C280.858 804.636 289.886 815.427 301.384 823.023C312.882 830.618 326.35 834.687 340.13 834.727H341.338C369.711 834.727 478.238 772.545 478.238 772.545C478.238 772.545 587.283 716.475 704.5 716.475C832.585 716.475 956.5 767.643 1096 643C1235.5 518.357 1440.01 552.09 1440.01 552.09V0.105L1284.75 0Z",
  "M1284.75 0C1284.75 0 1222.09 316.667 925.257 189C704.257 161.048 508.25 232.467 435.5 294.5C362.75 356.533 359.953 426.767 204.5 410.5C116.157 401.26 0.0449219 316.463 -0.00012207 316.2V716.475C-0.00012207 716.475 189.75 604.995 292.882 697.725C319.132 721.35 338.865 753.84 347.295 773.227C352.74 785.886 361.768 796.677 373.266 804.273C384.764 811.868 398.232 815.937 412.012 815.977H413.22C441.592 815.977 467.077 798.818 478.237 772.545C497.325 727.605 545.04 683.775 662.257 683.775C790.342 683.775 855.757 687.668 995.257 563.025C1134.76 438.383 1440.01 552.09 1440.01 552.09V0.105L1284.75 0Z",
  "M1284.75 0C1284.75 0 1219.09 213.667 995.257 189C704.257 161.048 508.25 232.467 435.5 294.5C362.75 356.533 359.953 426.767 204.5 410.5C116.157 401.26 0.0449219 316.463 -0.00012207 316.2V716.475C-0.00012207 716.475 189.75 604.995 292.882 697.725C319.132 721.35 338.865 753.84 347.295 773.227C352.74 785.886 361.768 796.677 373.266 804.273C384.764 811.868 398.232 815.937 412.012 815.977H413.22C441.592 815.977 467.077 798.818 478.237 772.545C497.325 727.605 545.04 683.775 662.257 683.775C790.342 683.775 912.5 746.643 1052 622C1191.5 497.357 1440.01 552.09 1440.01 552.09V0.105L1284.75 0Z"
]
const ShapeIndex = () => {
  let shapeElement = useRef(null);
  useEffect(() => {

  if(document !== undefined) {
    anime({
        targets: ['#Elem'],
        easing: 'linear',
        d: [
            {
              value: shapes[3],
              duration: 1000,
              easing: 'easeInOutQuad'
            },
            {
              value: shapes[1],
              duration: 1000,
              easing: 'easeInOutQuad'
            },
           
        ],
        duration: 5000,
        direction: 'alternate',
        autoplay: true,
        easing: 'linear',
        elasticity: 100,
        loop: true
      });
  }
  
  
  }, [])
  return  (
        <ShapeContainer>
            
            <svg width="1600" height="880" x="0px" y="0px" viewBox="0 0 1441 816" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={(el) => (shapeElement = el)} id="Elem" d="M1284.75 0C1284.75 0 1214.59 265.013 957.75 240.345C666.75 212.393 615 309.765 542.25 371.798C469.5 433.83 327.202 493.065 171.75 476.797C83.4073 467.557 0.0449219 316.463 -0.00012207 316.2V716.475C-0.00012207 716.475 189.75 604.995 292.882 697.725C319.132 721.35 338.865 753.84 347.295 773.227C352.74 785.886 361.768 796.677 373.266 804.273C384.764 811.868 398.232 815.937 412.012 815.977H413.22C441.592 815.977 467.077 798.818 478.237 772.545C497.325 727.605 545.04 683.775 662.257 683.775C790.342 683.775 855.757 687.668 995.257 563.025C1134.76 438.383 1440.01 552.09 1440.01 552.09V0.105L1284.75 0Z" fill="#1A6AFF"/>
            </svg>   
        </ShapeContainer>
            
        )
};

const ShapeContainer = styled.div`
    position:absolute;
    width:100%;
    height:auto;
    z-index:-10;
    top:-160px;
    left:0;
    filter: url("#wavy");
    svg {
        width:100%;
        position:absolute;
        z-index:0;
    }
`
  
export default ShapeIndex;


/*

<svg>
  <filter id="wavy">
    <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
    <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
  </filter>
</svg>

*/