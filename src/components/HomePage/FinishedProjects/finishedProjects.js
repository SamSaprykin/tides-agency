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
import AnimBorder from "../../borderAnimation"
import BorderElement from "../../DecorationElements/borderElement"

const FinishedProjects = ({data}) => {
  return (
    <FinishedProjectsWrapper>
        <WrapperBoard>
            <WrapperContent>
                <TitleProjects>
                  <AnimParagraph>
                    {data.tItle}
                  </AnimParagraph>
                </TitleProjects>
                <AnimBorder>
                  <BorderElement color="#191B1C"/>
                </AnimBorder>
                <DescriptionWrapper>
                    <Description>
                      <AnimHighParagraph>
                        <div dangerouslySetInnerHTML={{ __html: `<div> ${data.description.description} </div>` }} />
                      </AnimHighParagraph>
                    </Description>
                    <Information>
                      <AnimHighParagraph>
                        <div dangerouslySetInnerHTML={{ __html: `<div> ${data.information.information} </div>` }} />
                      </AnimHighParagraph>
                    </Information>
                </DescriptionWrapper>
                <ProjectsLinks>
                    {
                      data.projectsItem.map((item,index) => {
                        return (
                          <>
                            <ProjectItem key={index}>
                                <AnimSmall delay={.1}>
                                  <IconItem 
                                    src={item.icon.file.url}
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
                            <AnimBorder delay={index/10 +.1}>
                              <BorderElement color="#191B1C"/>
                            </AnimBorder>
                          </>
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


