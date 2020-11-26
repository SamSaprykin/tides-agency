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

import useLatestProjects from "../../../hooks/useLatestProjects"

const FinishedProjects = ({data}) => {
  const latestProjects = useLatestProjects()
  
  
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
                      latestProjects.map((item,index) => {
                        let year, workTypes
                        item.node.components.map(ele => {
                          const type = ele.__typename;
                          if (type === 'ContentfulAboutSectionCaseStudy') {
                            return (
                              year = ele.launchDate
                            )
                          }  else if (type === 'ContentfulServicesSectionCaseStudy') {
                            return  workTypes = ele.services;
                          } 
                        })
                        
                        let worTypesList = workTypes.join(", ")
                        return (
                          <>
                            <ProjectItem key={index}>
                                <AnimSmall delay={.1}>
                                  <IconItem 
                                    src={item.node.iconCaseStudy.file.url}
                                  />
                                </AnimSmall>
                                <AnimSmall delay={.2}>
                                  <WorkType>
                                    {worTypesList} 
                                  </WorkType>
                                </AnimSmall>
                                <AnimSmall delay={.3}>
                                  <WorkYear>{year}</WorkYear>
                                </AnimSmall>
                                <AnimSmall delay={.4}>
                                  <Link to={`/case-study/${item.node.slug}`}>
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


