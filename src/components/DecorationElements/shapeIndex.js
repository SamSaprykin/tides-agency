import React, {useRef, useEffect} from "react"
import styled from "styled-components";
import anime from 'animejs'


let shapes = [
  "M181.5,471.5c18.2-78.7,33.4-140.4,90-181c74.4-53.3,188.2-47,263,0c86.2,54.2,79.1,136.3,139,146c75.8,12.2,111.1-115.3,205-119c86.6-3.4,171.8,100.5,199,194c46.1,158.4-56.7,346.2-178,378c-120.6,31.6-173.7-113.2-357-115c-175-1.7-244.9,129.2-324,85C109.3,798.4,172.7,509.4,181.5,471.5z",
  "M207.5,399.5c18.7-45.4,67.8-164.7,186-189c115.6-23.7,243.9,54.6,266,144c19.8,80.1-56.2,126.7-31,181c41.2,88.9,262.8,3.5,335,98c65.9,86.2,4.1,317.8-165,394c-173.8,78.4-387.9-40.5-415-154c-17-71.1,44.6-118.5,13-176c-39.8-72.4-157.2-33-205-109C154.2,529.1,188.4,445.9,207.5,399.5z"
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
              value: shapes[1],
              duration: 1000,
              easing: 'easeInOutQuad'
            },
            {
              value: shapes[0],
              duration: 1000,
              easing: 'easeInOutQuad'
            }
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
            <svg width="1440" height="740" x="0px" y="0px" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={(el) => (shapeElement = el)} id="Elem" d="M205.5,543.5c15.9-118.3,23.9-177.6,71-234c60.8-72.7,165.1-114.6,261-102c170.4,22.4,258.7,209.5,293,282c54.5,115.5,21.7,135.7,88,322c61.5,173,107.3,204.8,85,253c-49.9,107.6-362.3,129.1-461,0c-71.6-93.7,7.8-216.3-71-282c-77.8-64.8-199.1,17.7-258-50C184.6,699.3,191.5,647.3,205.5,543.5z" fill="#1A6AFF"/>
            </svg>   
        </ShapeContainer>
            
        )
};

const ShapeContainer = styled.div`
    position:absolute;
    width:100%;
    height:100vh;
    z-index:-10;
    top:0;
    left:0;
    svg {
        width:100%;
        position:absolute;
        z-index:0;
    }
`
  
export default ShapeIndex;