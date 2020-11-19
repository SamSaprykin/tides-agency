import React from "react"
import Image from "gatsby-image"

import StainsBackground from "../../DecorationElements/stainsBackgrounds"
import { 
    ServicesProjectWrapper,
    TitleImage,
    InformationWrapper,
    ServicesList,
    ServicesListWrapper,
    ListTitle,
    AwardsListWrapper,
    AwardsList,
} from "../../../styles/ProjectPage/servicesProjectSection"

const ServicesProjectSection = ({data}) => {
  console.log(data.projectAwwards)
  return (
  <>
  <ServicesProjectWrapper>
    <TitleImage>
        <Image fluid={data.mainImage.fluid} />
    </TitleImage>
    <InformationWrapper>
        <ServicesListWrapper>
            <ListTitle>
                Services
            </ListTitle>
            <ServicesList>
                {
                    data.services.map((service,index) =>{
                        return (
                            <li key={index}>{service}</li>
                        )
                    })
                }
            </ServicesList>
        </ServicesListWrapper>
        {
            data.projectAwwards !== null && (
                <AwardsListWrapper>
                    <ListTitle>
                        Project Awwards
                    </ListTitle>
                    <AwardsList>
                        {
                            data.projectAwwards.map((award, index) => {
                                return (
                                    <li key={index}>{award}</li>
                                )
                            })
                        }
                    </AwardsList>
                </AwardsListWrapper>
            )
        }
        
       
    </InformationWrapper>
    <StainsBackground rotate="12deg" top="30%" left="14%" height="800px"/>
  </ServicesProjectWrapper>
  </>
  )
}
  




export default ServicesProjectSection




