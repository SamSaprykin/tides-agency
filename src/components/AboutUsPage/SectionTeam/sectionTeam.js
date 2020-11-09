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


const teamData =  [
    {
        title:"strategists",
        icon:"strategistIcon",
    },
    {
        title:"designers",
        icon:"designersIcon",
    },
    {
        title:"technologists",
        icon:"technologistIcon",
    },
    {
        title:"data scientists",
        icon:"dataSientistIcon",
    },
    {
        title:"marketers",
        icon:"marketersIcon",
    },
    {
        title:"analysts",
        icon:"analystsIcon",
    },
    {
        title:"product managers",
        icon:"producManagerIcon",
    },
    {
        title:"developers",
        icon:"developersIcon",
    },
    {
        title:"entrepreneurs",
        icon:"entrepreneursIcon",
    },
]
const SectionTeam = ({ }) => {
  return (
    <WrapperTeam>
    <ContainerTeam>
        <TitleTeam>
            <AnimParagraph>
                One of the strongest Team on earth
            </AnimParagraph>
        </TitleTeam>
        <AnimBorder>
            <BorderElement color="#191B1C" />
        </AnimBorder>
        
        <TextTeam>
            <AnimHighParagraph>
                We refuse to go with the flow of outdated but traditional schemes. To achieve
                an excellent result, we seek out unorthodox ways of solving problems. <br /><br />

                We hunt for insights to better your business or product. But to find something incredible, 
                we don't allow routine. Therefore, we value diversity. It can provide fertile ground for the 
                cultivation of brilliant ideas. And we have seen this many times.  <br /><br />
            </AnimHighParagraph>
            <AnimHighParagraph>
                But we are not only about business but also people. The team is extremely important to us. 
                We value honesty, empathy, and creativity. Therefore,
                the Tides team are not just competent, but special people who are determined
                to improve the systems by which the business operates. <br /><br />
            </AnimHighParagraph>
        </TextTeam> 
        <BorderElement color="#191B1C" />
        <TeamIconsSection>
            <TeamIconsTitle>
                We are <span>tides</span>
            </TeamIconsTitle>
            <TeamIconsContainer>
                {
                    teamData.map((item,i) => {
                        return (
                            <TeamIconsItem key={i}>
                                <TidesIcons type={item.icon} />
                                <span>{item.title}</span>
                            </TeamIconsItem>
                        )
                    })
                }
                
            </TeamIconsContainer>
        </TeamIconsSection>
    </ContainerTeam>
    </WrapperTeam>
  )
}
  




export default SectionTeam