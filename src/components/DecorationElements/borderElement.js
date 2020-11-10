import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const BorderElement = ({padding,color, opacity}) => {
  return  (
    <WrapperBorder padding={padding} opacity={opacity} >
        <Border color={color}/>
    </WrapperBorder>
            
  )
};

BorderElement.defaultProps = {
  padding: `0`,
  color: `#E8ECF3`,
  opcaity: 1,
}

BorderElement.propTypes = {
  padding: PropTypes.string,
  color: PropTypes.string,
  opcaity: PropTypes.string,
}

const WrapperBorder = styled.div`
    padding: ${props => props.padding};
    width:100%;
    height:1px;
    opacity: ${props => props.opacity}  
`
const Border = styled.div`
    height:1px;
    background-color: ${props => props.color};
    width:100%;
`
  
export default BorderElement;
