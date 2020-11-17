import React, {useRef, useEffect} from "react"
import TidesIcons from "../../DecorationElements/tidesIcons"
import ShapeIndex from "../../DecorationElements/shapeIndex"
import ScrollDown from "../../DecorationElements/scrollDown"

import { 
    HeroLayout,
    HeroText,
    WordsWrapper,
} from "../../../styles/IndexPage/heroSection"

import {
  staggerLinksHero
} from '../../animate'

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.text = [];
    this.refPar0 = React.createRef();
    this.refPar1 = React.createRef();
    this.refPar2 = React.createRef();
    this.refPar3 = React.createRef();
  }
  
  componentDidMount = () => {
    staggerLinksHero(this.refPar0.current,this.refPar1.current,this.refPar2.current,this.refPar3.current)
  }

  render() {
    return (
      <>
        <HeroLayout id="hero-section">
          <HeroText> 
              <ul>
                {
                  this.props.data.textIndexHero.map((textRow,index)=>{
                    return (
                      <WordsWrapper key={index}>
                        <li ref={this[`refPar${index}`]}>{textRow}
                        {
                          index === 3 && (
                              <TidesIcons type="waveTextDecoration" />
                          )
                        }
                        </li>
                      </WordsWrapper >
                    )
                    
                  })
                }
                
              </ul>
              <ShapeIndex />
          </HeroText>
          <ScrollDown margin='100px 0 0'/>
        </HeroLayout>
      </>
    )
  }
}
  




export default HeroSection
