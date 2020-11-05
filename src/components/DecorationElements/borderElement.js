import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const BorderElement = ({padding,color}) => {
  return  (
    <WrapperBorder padding={padding} >
        <Border color={color}/>
    </WrapperBorder>
            
  )
};

BorderElement.defaultProps = {
  padding: `0`,
  color: `#E8ECF3`,
}

BorderElement.propTypes = {
  padding: PropTypes.string,
  color: PropTypes.string,
}

const WrapperBorder = styled.div`
    padding: ${props => props.padding};
    width:100%;
    height:1px;  
`
const Border = styled.div`
    height:1px;
    background-color: ${props => props.color};
    width:100%;
`
  
export default BorderElement;
