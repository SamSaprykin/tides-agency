import React from "react"

import BorderElement from "../../DecorationElements/borderElement"
import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    WrapperForces,
    ContainerForces,
    TitleForces,
    TextForces,
    SliderForces,
    SliderForcesTitle,
    SliderButtonsWrapper,
    SliderButton,
    SliderForcesDescription,
    SliderForcesFiguresWrapper,
    WrapperForcesItem,
    SliderContent,
    FigureWrapper,
    FigureImage,
} from "../../../styles/AbouUsPage/sectionForces"



const SectionForces = ({ }) => {
  return (
  <WrapperForces>
   <ContainerForces>
       <TitleForces>
           One of the strongest forces on earth
       </TitleForces>
       <BorderElement color="#191B1C" />
       <TextForces>
        We refuse to go with the flow of outdated but traditional schemes. To achieve
        an excellent result, we seek out unorthodox ways of solving problems. <br /><br />

        We hunt for insights to better your business or product. But to find something incredible, 
        we don't allow routine. Therefore, we value diversity. It can provide fertile ground for the 
        cultivation of brilliant ideas. And we have seen this many times.  <br /><br />

        But we are not only about business but also people. The team is extremely important to us. 
        We value honesty, empathy, and creativity. Therefore,
        the Tides team are not just competent, but special people who are determined
        to improve the systems by which the business operates. <br /><br />
       </TextForces> 
       <BorderElement color="#191B1C" />
       <SliderForces>
           <SliderForcesTitle>
               We are <span>tides</span>
           </SliderForcesTitle>
           <SliderButtonsWrapper>
            <SliderButton className="left">
                <TidesIcons type="arrowButton"  />
            </SliderButton>
            <SliderButton className="right">
                <TidesIcons type="arrowButton"  />
            </SliderButton>
        </SliderButtonsWrapper>
        <SliderContent>
            <SliderForcesFiguresWrapper>
                    <FigureWrapper>
                        <FigureImage src="./shapes/1/Ellipse_45.svg" />
                        <FigureImage src="./shapes/1/Group_915.svg" />
                        <FigureImage src="./shapes/1/Polygon_1.svg" />
                    </FigureWrapper>
            </SliderForcesFiguresWrapper>
            <SliderForcesDescription>
                <WrapperForcesItem>
                    <ul>
                        <li>Strategists</li>
                        <li>Designers</li>
                        <li>Marketers</li>
                    </ul>
                    
                </WrapperForcesItem>
            </SliderForcesDescription>
        </SliderContent>
       </SliderForces>
   </ContainerForces>
  </WrapperForces>
  )
}
  




export default SectionForces