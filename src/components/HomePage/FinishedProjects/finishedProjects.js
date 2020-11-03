import React from "react"

import { Link } from "gatsby"
import { 
  FinishedProjectsWrapper,
  WrapperBoard,
  WrapperContent,
  Titleprojects,
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

const projectList = [
  {
    icon:"/advent.svg",
    workTypes:["Strategy", "Design", "Development"],
    year:"2020",
    linkTo:"/",
  },
  {
    icon:"/amtt.svg",
    workTypes:["Strategy", "Design"],
    year:"2019",
    linkTo:"/",
  },
  {
    icon:"/healthcare.svg",
    workTypes:["Strategy", "Design", "Marketing"],
    year:"2020",
    linkTo:"/",
  },
  {
    icon:"/amn.svg",
    workTypes:["Strategy", "Design", "Development"],
    year:"2018",
    linkTo:"/",
  },
  
  
]

const FinishedProjects = ({ }) => {
  
  return (
    <FinishedProjectsWrapper>
        <WrapperBoard>
            <WrapperContent>
                <Titleprojects>
                    Exrepience for dayysssss
                </Titleprojects>
                <DescriptionWrapper>
                    <Description>
                      Leverage the eons of experience Tides has in 
                      strategy, design, marketing, &amp; development 
                      initiatives.
                    </Description>
                    <Information>
                      We can help guide you through all the minesia and distractions of growing your company. 
                      Let us hunt down game-changing insights to help inform stakeholders on key decisions, 
                      build your brand that connects with customers, architect solutions that empower your 
                      team to focus on the things that matter, collect structured data that can be leveraged, 
                      embed design in your organization, product, team, and brand. <br />
                      <br />
                      We've helped these companies
                    </Information>
                </DescriptionWrapper>
                <ProjectsLinks>
                    {
                      projectList.map(item => {
                        return (
                          <ProjectItem key={item.year} >
                              <IconItem 
                                src={item.icon}
                              />
                              <div>
                                {
                                  item.workTypes.map(type => {
                                    return (
                                      <WorkType key={type}>{type} </WorkType>
                                    )
                                  })
                                }
                              </div>
                              <WorkYear>{item.year}</WorkYear>
                              <Link to={item.linkTo}>
                                <ArrowWork src="/arrow-work.png" />
                              </Link>
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


