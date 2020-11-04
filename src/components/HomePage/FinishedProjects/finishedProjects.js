import React from "react"

import { Link } from "gatsby"
import { 
  FinishedProjectsWrapper,
  WrapperBoard,
  WrapperContent,
  TitleProjects,
  DescriptionWrapper,
  Description,
  Information,
  ProjectsLinks,
  ProjectItem,
  WorkYear,
  WorkType,
  IconItem,
  ArrowWork
} from "../../../styles/IndexPage/finishedProjects"
import AnimParagraph from "../../animateParagraph"
import AnimHighParagraph from "../../animateHeight"
import AnimSmall from "../../animSmall"
const projectList = [
  {
    icon:"/advent.svg",
    workTypes:"Strategy,Design, Development",
    year:"2020",
    linkTo:"/",
  },
  {
    icon:"/amtt.svg",
    workTypes:"Strategy, Design",
    year:"2019",
    linkTo:"/",
  },
  {
    icon:"/healthcare.svg",
    workTypes:"Strategy, Design, Marketing",
    year:"2020",
    linkTo:"/",
  },
  {
    icon:"/amn.svg",
    workTypes:"Strategy, Design, Development",
    year:"2018",
    linkTo:"/",
  },
  
  
]

const FinishedProjects = ({ }) => {
  
  return (
    <FinishedProjectsWrapper>
        <WrapperBoard>
            <WrapperContent>
                <TitleProjects>
                  <AnimParagraph>
                    Exrepience for dayysssss
                  </AnimParagraph>
                </TitleProjects>
                <DescriptionWrapper>
                    <Description>
                      <AnimHighParagraph>
                        Leverage the eons of experience Tides has in 
                        strategy, design, marketing, &amp; development 
                        initiatives.
                      </AnimHighParagraph>
                    </Description>
                    <Information>
                      <AnimHighParagraph>
                        We can help guide you through all the minesia and distractions of growing your company. 
                        Let us hunt down game-changing insights to help inform stakeholders on key decisions, 
                        build your brand that connects with customers, architect solutions that empower your 
                        team to focus on the things that matter, collect structured data that can be leveraged, 
                        embed design in your organization, product, team, and brand. <br />
                        <br />
                        We've helped these companies
                      </AnimHighParagraph>
                    </Information>
                </DescriptionWrapper>
                <ProjectsLinks>
                    {
                      projectList.map(item => {
                        return (
                          <ProjectItem key={item.year} >
                            
                              <AnimSmall delay={.1}>
                                <IconItem 
                                  src={item.icon}
                                />
                              </AnimSmall>
                              
                              <AnimSmall delay={.2}>
                                <WorkType>{item.workTypes} </WorkType>
                              </AnimSmall>
                             
                              <AnimSmall delay={.3}>
                                <WorkYear>{item.year}</WorkYear>
                              </AnimSmall>

                              <AnimSmall delay={.4}>
                                <Link to={item.linkTo}>
                                  <ArrowWork src="/arrow-angle.svg" />
                                </Link>
                              </AnimSmall>
                              
                          </ProjectItem>
                        )
                      })
                    }
                </ProjectsLinks>
            </WrapperContent>
        </WrapperBoard>
    </FinishedProjectsWrapper>
  )
}
  




export default FinishedProjects


