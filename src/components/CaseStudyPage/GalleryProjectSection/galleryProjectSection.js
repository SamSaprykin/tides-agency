import React from "react"
import MarqueRow from "../../DecorationElements/marqueRow"
import { 
    ProjectGalleryWrapper,
    GalleryImageContainer,
    GalleryTypeItem,
    GalleryImagesWrapper,
} from "../../../styles/ProjectPage/galleryProjectSection"

const  GalleryData = [
    {
        MarqueText:"branding - branding - branding - branding - branding - branding - branding - branding - branding",
        Images: [
            {
                image:"/case_study/branding_1.png",
                paddingItem:"60px;",
            },
            {
                image:"/case_study/branding_2.png",
                paddingItem:"60px;",
            }
        ],
        
    },
    {
        MarqueText:"website - website - website - website - website - website - website - website - website - website ",
        Images: [
            {
                image:"/case_study/website_1.png",
                paddingItem:"60px;",
            },
            {
                image:"/case_study/website_2.png",
                paddingItem:"103px 35px;",
            },
            {
                image:"/case_study/website_3.png",
                paddingItem:"103px 35px;",
            }
        ],
    },
    {
        MarqueText:"animation - animation - animation - animation - animation - animation - animation - animation",
        Images: [
            {
                image:"/case_study/animation_1.png",
                paddingItem:"155px 118px;",
            }
        ],
    },
    {
        MarqueText:"branding - branding - branding - branding - branding - branding - branding - branding - branding",
        Images: [
            {
                image:"/case_study/mobile_1.png",
                paddingItem:"84px 78px;",
            },
            {
                image:"/case_study/mobile_2.png",
                paddingItem:"84px 78px;",
            }
        ],
    }  
]


const GalleryProjectSection = ({ }) => {
  
  return (
  <>
    <ProjectGalleryWrapper>
        {
            GalleryData.map((item,i)=>{
                console.log(item)
                return (
                    <GalleryTypeItem key={i}>
                        <MarqueRow textMarque={item.MarqueText} />
                        <GalleryImagesWrapper>
                            {
                                item.Images.map((image,i)=>{
                                    return (
                                        <GalleryImageContainer key={i} paddingItem={image.paddingItem} >
                                            <img src={image.image} />
                                        </GalleryImageContainer>
                                    )
                                  
                                })
                            }
                        </GalleryImagesWrapper>
                    </GalleryTypeItem>
                )
            })
        }
    </ProjectGalleryWrapper>
 
  </>
  )
}
  




export default GalleryProjectSection

