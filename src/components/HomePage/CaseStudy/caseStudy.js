import React from "react"
import TidesIcons from "../../DecorationElements/tidesIcons"
import { Link } from "gatsby"
import { 
  WrapperCaseStudy,
  WrapperBoard,
  WrapperContent,
  TitleCaseStudy,
  DescriptionWrapper,
  Description,
  Information,
  ProjectsLinks,
  ProjectItem,
  WorkYear,
} from "../../../styles/IndexPage/caseStudy"

const projectList = [
  {
    icon:"advent",
    workTypes:["Strategy", "Design", "Development"],
    year:"2020",
    linkTo:"/",
  },
  {
    icon:"am_tt",
    workTypes:["Strategy", "Design"],
    year:"2019",
    linkTo:"/",
  },
  {
    icon:"nauwork",
    workTypes:["Strategy", "Design", "Marketing"],
    year:"2020",
    linkTo:"/",
  },
  {
    icon:"amn_healthcare",
    workTypes:["Strategy", "Design", "Development"],
    year:"2018",
    linkTo:"/",
  },
  
  
]

const CaseStudy = ({ }) => {
  
  
  return (
    <WrapperCaseStudy>
        <WrapperBoard>
            <WrapperContent>
                <TitleCaseStudy>
                    Exrepience for dayysssss
                </TitleCaseStudy>
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
                          <ProjectItem key={item.year}>
                              <TidesIcons type={item.icon} />
                              <div>
                                {
                                  item.workTypes.map(type => {
                                    return (
                                      <span key={type}>{type} </span>
                                    )
                                  })
                                }
                              </div>
                              <WorkYear>{item.year}</WorkYear>
                              <Link to={item.linkTo}>Icon arrow</Link>
                          </ProjectItem>
                        )
                      })
                    }
                </ProjectsLinks>
            </WrapperContent>
        </WrapperBoard>
    </WrapperCaseStudy>
  )
}
  




export default CaseStudy
