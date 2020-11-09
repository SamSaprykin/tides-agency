import React from "react"
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import TidesIcons from "../DecorationElements/tidesIcons"
import styled from "styled-components"
import { useMotionSlider } from '../../hooks/useMotionSlider';

export const imagesData = [
    {
      id: 1,
      srcImg: "./shapes/1/Group_915.svg",
      name: 'Strategists',
    },
    {
      id: 2,
      srcImg: "./shapes/2/Group_917.svg",
      name: `Designers`,
    },
    {
      id: 3,
      srcImg: "./shapes/3/Group_919.svg",
      name: 'Marketers',
    },
  ];


const motionSliderVariants = {
    
    containerVariants: {
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  
    imgVariants: {
      hidden: (direction) => {
        return {
          x: direction > 0 ? 100 : -100,
          y:  100,
          opacity: 0,
          rotate: 15,
          transition: { duration: 1 }
        };
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 1 }
      },
      exit: (direction) => {
        return {
          scale: .9,
          x: direction < 0 ? 100 : -100,
          y: -100,
          opacity: 0,
          rotate: -15,
          transition: { duration: 1 }
        };
      },
    },
  
    textVariants: {
      hidden: {
        y: 72,
        transition: { duration: 1 }
      },
      visible: {
        y: 0,
        transition: { duration: 1 }
      },
      exit: {
        y: -72,
        transition: { duration: 1 }
      },
    },
};

const { containerVariants, imgVariants, textVariants } = motionSliderVariants;

const MotionSlider = ({ options, data }) => {

  
  const {
    state,
    currentIndex,
    handleChangeSlide,
    handleDrag,
  } = useMotionSlider(imagesData, options);

  const { srcImg, name, quote, price } = imagesData[currentIndex];

  const [page, direction] = state;

  return (
    <>
    <SliderForces>
        <SliderForcesTitle>
            We are <span>tides</span>
        </SliderForcesTitle>
        <SliderButtonsWrapper>
                <SliderButton className="left" onClick={() => handleChangeSlide(-1)}>
                    <TidesIcons type="arrowButton"  />
                </SliderButton>
                <SliderButton className="right" onClick={() => handleChangeSlide(1)}>
                    <TidesIcons type="arrowButton"  />
                </SliderButton>
        </SliderButtonsWrapper>
        <Container>
            <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
                <motion.div
                    key={page}
                    custom={direction}
                    className="slider"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                <SliderForcesFiguresWrapper>
                    <FigureWrapper>
                        <motion.div className="imgContainer" variants={imgVariants}>
                            <img src={srcImg} alt={name} />
                        </motion.div>
                    </FigureWrapper>
                </SliderForcesFiguresWrapper>

                <SliderContent>
                    <motion.span variants={textVariants}>{name}</motion.span>
                </SliderContent>
                </motion.div>
            </AnimatePresence>
        </Container>
    </SliderForces>
    
    </>
  );
};

MotionSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.shape({
    nextSlideTime: PropTypes.number,
    swipingThreshold: PropTypes.number,
  }),
};

MotionSlider.defaultProps = {
  options: {
    nextSlideTime: 6000,
    swipingThreshold: 100000,
  },
};

const SliderForces = styled.div`
    margin-top:40px;
    position:relative;
    height:450px;
`

const SliderForcesTitle = styled.h4`
    font-size:34px;
    line-height:38px;
    font-family: Bandeins Sans;
    font-weight:400;
    color:#191B1C;
    span {
        font-family: Stinger Fit;
        font-weight:400;
        text-transform:uppercase;
        color: #1A6AFF;
    }
`

const SliderButtonsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:154px;
    position:absolute;
    right:0;
    top:0;
    z-index:2;
    .left {
        transform: rotate(180deg);
    }
`


const SliderButton = styled.button`
    background-color:transparent;
    width:70px;
    height:70px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    border:1px solid #191B1C;
    outline:none;
    svg {
        path {
            fill: #191B1C !important;
        }
    }
    :hover {
    border:1px solid #1A6AFF;
    svg {
        path {
            fill: #1A6AFF !important;
        }
      }
    }

`

const SliderForcesFiguresWrapper = styled.div`
    width:46%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
`


const Container = styled.div`
    width: 100%;
    max-width: 80rem;
    height: 450px;
    position: relative;   
    .slider {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content:space-between;
        .imgContainer {
          overflow: hidden;
          img {
            margin: 0;
            height: auto;
            width: 100%;
            object-fit: cover;
            pointer-events: none;
          }
        }
        .contentContainer {
          width: 50%;
          position: absolute;
          right: 0;
          top:50%;
          text-align:right;
          height:140px;
          span {
            display: inline-block;
            position: relative;
            padding: 0.5rem 0;
            -webkit-text-stroke: 2px #191B1C;
            font-weight:400;
            font-size:72px;
            line-height:140px;
            font-family:Bandeins Sans;
            text-transform:uppercase;
            color:transparent;
            z-index: 6;
          }
        }
      }
`

const SliderContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    align-items:center;
    height:72px;
    position:relative;
    overflow:hidden;
    top:50%;
    transform:translateY(-50%);
    span {
        display: inline-block;
        position: relative;
        padding: 0.5rem 0;
        -webkit-text-stroke: 2px #191B1C;
        font-weight:400;
        font-size:72px;
        font-family:Bandeins Sans;
        text-transform:uppercase;
        color:transparent;
        z-index: 6;
    }
`


const FigureWrapper = styled.div`
    position:relative;
    width:100%;
    height:auto;
    
`


/*

const FigureImage = styled.img`
    position:absolute;
    top:0;
    left:0;
    transition:all .8s ease-in-out;
    :nth-of-type(1) {
        top:-${positionX1}px;
        left:${positionY1}px;
    }
    :nth-of-type(2) {
        top:-${positionX2}px;
        left:${positionY2}px;
    }
    :nth-of-type(3) {
        top:-${positionX3}px;
        left:${positionY3}px;
    }
    ${SliderForcesFiguresWrapper} :hover & {
        :nth-of-type(1) {
            top:-${positionX1}vh;
            left:${positionY1}vw;
            transform:rotate(${rotate1}deg);
            opacity:0;
        }
        :nth-of-type(2) {
            top:${positionX2}vh;
            left:-${positionY2}vw;
            transform:rotate(-${rotate2}deg);
            opacity:0;
        }
        :nth-of-type(3) {
            top:${positionX3}vh;
            left:${positionY3}vw;
            transform:rotate(${rotate3}deg);
            opacity:0;
        }
    }
    
`

*/



export default MotionSlider;

