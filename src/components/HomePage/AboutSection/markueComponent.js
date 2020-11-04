import React from "react"
import { TimelineMax , TweenLite, CSSPlugin } from "gsap";
import "./aboutSection.css"
import { 
    DescriptionArea,
    DescriptionItems,
    Marque,
    
} from "../../../styles/IndexPage/aboutSection"

import AnimParagraph from "../../animateParagraph"

const plugins = [ CSSPlugin ];

class MarkueComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
    this.marqueRef = React.createRef();
    this.descrRef = React.createRef();
    this.buttonRef = React.createRef();
    this.refPar0 = React.createRef();
    this.refPar1 = React.createRef();
    this.refPar2 = React.createRef();
    this.refPar3 = React.createRef();
    this.refPar4 = React.createRef();
    this.refPar5 = React.createRef();
  }
  showDescr = () => {
     
    if(this.marqueRef && this.marqueRef.current !== null) {
      TweenLite.to(this.marqueRef.current, 1, {height:"400px"})
    }
    if(this.descrRef && this.descrRef.current !== null) {
      TweenLite.to(this.descrRef.current, 0.05, {opacity:1})  
    }
    let arr = [this.refPar0.current,this.refPar1.current,this.refPar2.current,this.refPar3.current,this.refPar4.current,this.refPar5.current]
    let amount = arr.length;
    
    for(var i = 0; i < amount; i++)
    {
      var element = arr[i];
      TweenLite.to(element, 0.8, { marginTop:"0" })
    }
    
  }
  hideDescr = () => {
    if(this.marqueRef && this.marqueRef.current !== null) {
      TweenLite.to(this.marqueRef.current, 0.8, {height:"188px"})
      
    }
    if(this.descrRef && this.descrRef.current !== null) {
      TweenLite.to(this.descrRef.current, 0.5, {opacity:0})  
    }
    let arr = [this.refPar0.current,this.refPar1.current,this.refPar2.current,this.refPar3.current,this.refPar4.current,this.refPar5.current]
    let amount = arr.length;
    
    for(var i = 0; i < amount; i++)
    {
      var element = arr[i];
      TweenLite.to(element, 0.8, { marginTop:"36px" })
    }
  }
  render() {
    return (
      <>
        <li className="menu__item"  key={this.props.data.id} onMouseLeave={this.hideDescr} >
            <h5 className="menu__item-link" onClick={this.showDescr} >
              <AnimParagraph>
                {this.props.data.title}
              </AnimParagraph>
                <button className="button-expand">+</button>
            </h5>
            <Marque className="marquee"  ref={this.marqueRef}>
                <button className="button-expand" ref={this.buttonRef}>+</button>
                <div className="marquee__inner" ref={this.itemRef} aria-hidden="true">   
                  {
                      this.props.data.innersElem.map(elem => (
                          <span>{elem}</span>
                      ))
                  }
                </div>
                <DescriptionArea ref={this.descrRef}>
                    <DescriptionItems>
                        {
                          this.props.data.descrItems.map((descrEl, index) => (
                              <li key={index}>
                                <p ref={this[`refPar${index}`]}>
                                  {descrEl}
                                </p>
                              </li>
                          ))
                        }
                    </DescriptionItems>
                </DescriptionArea>
            </Marque>
        </li>     
      </>
    )
  }
}



export default MarkueComponent