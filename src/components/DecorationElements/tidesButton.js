import React from 'react'
import styled, {keyframes} from "styled-components"
import PropTypes from "prop-types"
import TidesIcons from "./tidesIcons"
import AnimButton from "../animateButton"

const TidesButton = ({callToAction, small}) => {
  return  (
    <ButtonContainer small={small}>
        <AnimButton>
            <Button small={small}>
                {callToAction}
                <TidesIcons type="blobButton" /> 
            </Button>
        
        </AnimButton>
    </ButtonContainer>
  )
};

TidesButton.defaultProps = {

}

TidesButton.propTypes = {

}

const from360to0 = keyframes`
    from{transform:rotate(360deg)};
    to{transform:rotate(0deg)};
`;

const from0to360 = keyframes `
    from{transform:rotate(0)};
    to{transform:rotate(360deg)};
` 

const ButtonContainer = styled.div`
    width: ${({ small }) => {
        if (small === "false") return "300px"
        if (small === "true") return "200px"
    }};
    height: ${({ small }) => {
        if (small === "false") return "300px"
        if (small === "true") return "200px"
    }};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    #Circle1 {
      animation: ${from0to360} 1s linear infinite;
      
      cx: ${({ small }) => {
        if (small === "false") return "140;"
        if (small === "true") return "93.3;"
      }};
      cy: ${({ small }) => {
        if (small === "false") return "145;"
        if (small === "true") return "96.6;"
      }};
      r: ${({ small }) => {
        if (small === "false") return "100;"
        if (small === "true") return "66.6;"
      }};
      transform-origin: ${({ small }) => {
        if (small === "false") return "145px 150px;"
        if (small === "true") return "96.6px 100px;"
      }};
  }
    #Circle2 {
        animation: ${from360to0} 2s linear infinite;
        
        cx: ${({ small }) => {
            if (small === "false") return "150;"
            if (small === "true") return "100;"
        }};
        cy: ${({ small }) => {
            if (small === "false") return "155;"
            if (small === "true") return "103.3;"
        }};
        r: ${({ small }) => {
            if (small === "false") return "100;"
            if (small === "true") return "66.6;"
        }};

        transform-origin: ${({ small }) => {
            if (small === "false") return "155px 150px;"
            if (small === "true") return "103.3px 100px;"
        }};
    }
    
    #Circle3 {
      animation: ${from360to0} 2.5s linear infinite;
      
      cx: ${({ small }) => {
        if (small === "false") return "145;"
        if (small === "true") return "96.6;"
      }};
      cy: ${({ small }) => {
        if (small === "false") return "155;"
        if (small === "true") return "103.3;"
      }};
      r: ${({ small }) => {
        if (small === "false") return "100;"
        if (small === "true") return "66.6;"
      }};

      transform-origin: ${({ small }) => {
        if (small === "false") return "150px 145px;"
        if (small === "true") return "100px 96.6px;"
      }};
    }
    
    #Circle4 {
      animation: ${from360to0} 2.5s linear infinite;
      
      cx: ${({ small }) => {
        if (small === "false") return "160;"
        if (small === "true") return "106.6;"
      }};
      cy: ${({ small }) => {
        if (small === "false") return "155;"
        if (small === "true") return "103.3;"
      }};
      r: ${({ small }) => {
        if (small === "false") return "100;"
        if (small === "true") return "66.6;"
      }};

      transform-origin: ${({ small }) => {
        if (small === "false") return "150px 155px;"
        if (small === "true") return "100px 103.3px;"
      }};
    }
`

const Button = styled.button`
    width: ${({ small }) => {
        if (small === "false") return "236px"
        if (small === "true") return "163px"
    }};
    height: ${({ small }) => {
        if (small === "false") return "236px"
        if (small === "true") return "163px"
    }};
    background-color:transparent;
    border-radius: 100%;
    border:1px solid #FFCC00;
    color:#FFCC00;
    
    font-size: ${({ small }) => {
        if (small === "false") return "20px"
        if (small === "true") return "16px"
    }};
    line-height: ${({ small }) => {
        if (small === "false") return "34px"
        if (small === "true") return "24px"
    }};
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    font-family: Bandeins Sans;
    font-weight:400;
    position:relative;
    overflow:hidden;
    outline:none;
    transition: all .2s ease-in-out;
    svg {
        position:absolute;
        z-index:-10;
        opacity:0;
        transition: all .2s ease-in-out;
        
        width: ${({ small }) => {
            if (small === "false") return "300px"
            if (small === "true") return "200px"
          }};
        height: ${({ small }) => {
            if (small === "false") return "300px"
            if (small === "true") return "200px"
        }};
    }
    :hover {
        color:#191B1C;
        font-size: ${({ small }) => {
            if (small === "false") return "22px"
            if (small === "true") return "16px"
        }};
        width: ${({ small }) => {
            if (small === "false") return "300px"
            if (small === "true") return "163px"
          }};
        height: ${({ small }) => {
            if (small === "false") return "300px"
            if (small === "true") return "163px"
        }};
        border:none;
        transition: all .2s ease-in-out;
        svg {
            opacity:1;
        }
    }
`
  
export default TidesButton;