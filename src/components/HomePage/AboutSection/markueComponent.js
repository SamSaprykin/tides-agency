import React from "react"
import { TimelineMax , TweenLite, CSSPlugin } from "gsap";
import "./aboutSection.css"
import { 
    DescriptionArea,
    DescriptionItems,
    Marque,
} from "../../../styles/IndexPage/aboutSection"

const plugins = [ CSSPlugin ];

class MarkueComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
    this.marqueRef = React.createRef();
    this.descrRef = React.createRef();
    this.buttonRef = React.createRef();
  }
  showDescr = () => {
    
    if(this.marqueRef && this.marqueRef.current !== null) {
      TweenLite.to(this.marqueRef.current, 1, {height:"400px"})
    }
    if(this.descrRef && this.descrRef.current !== null) {
      TweenLite.to(this.descrRef.current, 0.05, {opacity:1})  
    }
   
  }
  hideDescr = () => {
    if(this.marqueRef && this.marqueRef.current !== null) {
      TweenLite.to(this.marqueRef.current, 0.8, {height:"188px"})
      
    }
    if(this.descrRef && this.descrRef.current !== null) {
      TweenLite.to(this.descrRef.current, 0.5, {opacity:0})  
    }
    
  }

  

  
  render() {
    return (
      <>
        <li className="menu__item"  key={this.props.data.id} onMouseLeave={this.hideDescr} >
            <h5 className="menu__item-link" >{this.props.data.title}
                <button className="button-expand"  
                    onClick={this.showDescr}    
                >+</button>
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
                            this.props.data.descrItems.map(descrEl => (
                                <li>{descrEl}</li>
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