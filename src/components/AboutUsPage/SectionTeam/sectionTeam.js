import React from "react"

import BorderElement from "../../DecorationElements/borderElement"
import TidesIcons from "../../DecorationElements/tidesIcons"

import { 
    WrapperTeam,
    ContainerTeam,
    TitleTeam,
    TextTeam,
    TeamIconsSection,
    TeamIconsTitle,
    TeamIconsContainer,
    TeamIconsItem,
} from "../../../styles/AbouUsPage/sectionTeam"

import AnimBorder from "../../borderAnimation"
import AnimParagraph from "../../animateParagraph"
import AnimHighParagraph from "../../animateHeight"

const SectionTeam = ({data}) => {
  
  return (
    <WrapperTeam>
    <ContainerTeam>
        {
          data.tItle && (
            <>
                <TitleTeam>
                    <AnimParagraph>
                        {data.tItle}
                    </AnimParagraph>
                </TitleTeam>
                <AnimBorder>
                    <BorderElement color="#191B1C" />
                </AnimBorder>
            </>
          )
        }
       
        {
          data.information && (
            <>
                <TextTeam>
                    <AnimHighParagraph>
                        <div dangerouslySetInnerHTML={{ __html: `<div> ${data.information.information} </div>` }} />
                    </AnimHighParagraph>
                </TextTeam> 
                <AnimBorder>
                    <BorderElement color="#191B1C" />
                </AnimBorder>
            </>
          )
        }
        
        {
          data.employeesList && (
            <TeamIconsSection>
                <TeamIconsTitle>
                    We are <span>tides</span>
                </TeamIconsTitle>
                <TeamIconsContainer>
                    {
                        data.employeesList.map((item,i) => {
                            return (
                                <TeamIconsItem key={i}>
                                    <img src={item.icon.file.url} alt={item.position} />
                                    <span>{item.position}</span>
                                </TeamIconsItem>
                            )
                        })
                    }
                    
                </TeamIconsContainer>
            </TeamIconsSection>
          )
        }
        
    </ContainerTeam>
    </WrapperTeam>
  )
}
  




export default SectionTeam