import React, { useState, useRef,  } from "react";
import { TweenLite, Power3 } from "gsap";

import { Link } from "gatsby"

import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    InsightsSectionWrapper,
    ContentWrapper,
    InsightsTitle,
    InsightsButton,
    InsightsContainerInformation,
    InsightsButtons,
    InsightsQuote,
    InsightsDescription,
    WrapInform,
    Column,
} from "../../../styles/IndexPage/insightsSection"



const insights = [
    {
      description: " Meet the gen Z Super Creatives: the supercharged multidisciplinary future of creative talent. And your new consumers. <br />  <br />More than half of gen Z(51%) say their generation is more creative than previous generations, according to a 2019 study conducted in the United States and United Kingdom by JWT Intelligence",
      image: `/imageSlider.png`,
      quote:
        "gez z are absolutely more creative, but it's more utilitarian than other generations."
    },
    {
      description: " Meet the gen Z Super Creatives: the supercharged multidisciplinary future of creative talent. And your new consumers. <br />  <br />More than half of gen Z(51%) say their generation is more creative than previous generations, according to a 2019 study conducted in the United States and United Kingdom by JWT Intelligence",
      image: `/anton.jpg`,
      quote:
        "gez z are absolutely more creative, but it's more utilitarian than other generations."
    },
    {
      description: " Meet the gen Z Super Creatives: the supercharged multidisciplinary future of creative talent. And your new consumers. <br />  <br />More than half of gen Z(51%) say their generation is more creative than previous generations, according to a 2019 study conducted in the United States and United Kingdom by JWT Intelligence",
      image: `/confession.jpg`,
      quote:
        "gez z are absolutely more creative, but it's more utilitarian than other generations."
    }
];

const InsightsSetion = ({ }) => {
    let imageList = useRef(null);
    let testimonialList = useRef(null);
    const imageWidth = 560;
  
    const [state, setState] = useState({
      isActive1: true,
      isActive2: false,
      isActive3: false
    });
    
    
    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
      TweenLite.to(imageList.children[index], duration, {
        y: -imageWidth * multiplied,
        ease: Power3.easeOut
      });
    };
  
    const slideRight = (index, duration, multiplied = 1) => {
      TweenLite.to(imageList.children[index], duration, {
        y: imageWidth * multiplied,
        ease: Power3.easeOut
      });
    };
  
    const scale = (index, duration) => {
      TweenLite.from(imageList.children[index], duration, {
        scale: 1.2,
        ease: Power3.easeOut
      });
    };
  
   //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1
    });
  };

  
    const nextSlide = () => {
      if (imageList.children[0].classList.contains("active")) {
        setState({ isActive1: false, isActive2: true });
        //Image transition
        slideLeft(0, 1);
        slideLeft(1, 1);
        scale(1, 1);
        slideLeft(2, 1);
        slideLeft(2, 0);
        fadeOut(0, 1);
        fadeIn(1, 1);
      } else if (imageList.children[1].classList.contains("active")) {
        setState({ isActive2: false, isActive3: true });
        //Image transition
        slideRight(0, 1);
        slideLeft(1, 1, 2);
        slideLeft(2, 1, 2);
        scale(2, 1);
        fadeOut(1, 1);
        fadeIn(2, 1);
      } else if (imageList.children[2].classList.contains("active")) {
        setState({ isActive1: true, isActive3: false });
        //Image transition
        slideLeft(2, 1, 3);
        slideLeft(0, 1, 0);
        slideLeft(1, 0, 0);
        scale(0, 1);
        fadeOut(2, 1);
        fadeIn(0, 1);
      }
    };
  
    const prevSlide = () => {
      if (imageList.children[0].classList.contains("active")) {
        setState({ isActive1: false, isActive3: true });
        //Image transition
        slideLeft(2, 0, 3);
        slideLeft(2, 1, 2);
        scale(2, 1);
        slideRight(0, 1);
        slideRight(1, 1);
      
      } else if (imageList.children[1].classList.contains("active")) {
        setState({ isActive2: false, isActive1: true });
        //Image transition
        slideLeft(0, 0);
        slideRight(0, 1, 0);
        slideRight(1, 1, 0);
        slideRight(2, 1, 2);
        scale(0, 1);
     
      } else if (imageList.children[2].classList.contains("active")) {
        setState({ isActive2: true, isActive3: false });
        slideLeft(2, 1);
        slideLeft(1, 0, 2);
        slideLeft(1, 1);
        scale(1, 1);
       
      }
    };
  return (
    <InsightsSectionWrapper>
      <ContentWrapper>
        <InsightsTitle>
            Insights
        </InsightsTitle>
        <InsightsContainerInformation ref={el => (testimonialList = el)}>
            <WrapInform className={state.isActive1 ? "active" : ""}>
                <Column>
                    <InsightsQuote>
                        {insights[0].quote }
                    </InsightsQuote>
                </Column>
                <Column>
                    <InsightsDescription>
                        <div dangerouslySetInnerHTML={{ __html: `<div> ${insights[0].description } </div>` }} />
                    </InsightsDescription>
                </Column>
            </WrapInform>
            <WrapInform className={state.isActive1 ? "active" : ""}>
                <Column>
                    <InsightsQuote>
                        {insights[1].quote }
                    </InsightsQuote>
                </Column>
                <Column>
                    <InsightsDescription>
                      <div dangerouslySetInnerHTML={{ __html: `<div> ${insights[1].description } </div>` }} />
                    </InsightsDescription>
                </Column>
            </WrapInform>
            <WrapInform className={state.isActive1 ? "active" : ""}>
                <Column>
                    <InsightsQuote>
                      {insights[2].quote }
                    </InsightsQuote>
                </Column>
                <Column>
                    <InsightsDescription>
                      <div dangerouslySetInnerHTML={{ __html: `<div> ${insights[2].description } </div>` }} />
                    </InsightsDescription>
                </Column>
            </WrapInform>
        </InsightsContainerInformation>
        <InsightsButtons>
            <InsightsButton onClick={prevSlide} className="left">
                <TidesIcons type="arrowButton"  />
            </InsightsButton>
            <InsightsButton onClick={nextSlide} className="right">
                <TidesIcons type="arrowButton"  />
            </InsightsButton>
        </InsightsButtons>
      </ContentWrapper>
      <div className="testimonial-container">
        <div className="inner">
          <div className="t-image">
            <ul ref={el => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={insights[0].image} alt={insights[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={insights[1].image} alt={insights[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={insights[2].image} alt={insights[0].name} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InsightsSectionWrapper>
  )
}
  




export default InsightsSetion