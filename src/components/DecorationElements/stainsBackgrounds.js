import React from "react";
import styled from "styled-components";



const StainsBackgrounds = ({
   top,left,height,
}) => {

  return  (
    <BackWrapper top={top} left={left}>
        <img src="/stains.png" height={height}/>
    </BackWrapper>
  )
        
};

const BackWrapper = styled.div`
   position:absolute;
   height:auto;
   left:${props => props.left};
   top:${props => props.top};  
   img {
       width:100%;
       height: ${props => props.height};
   }
   z-index:0;
`
  
export default StainsBackgrounds;