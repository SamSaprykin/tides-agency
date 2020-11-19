import React from "react"
import MarqueRow from "../../DecorationElements/marqueRow"

import { 
    ProjectGalleryWrapper,
    GalleryImageContainer,
    GalleryTypeItem,
    GalleryImagesWrapper,
} from "../../../styles/ProjectPage/galleryProjectSection"

const GalleryProjectSection = ({data}) => {
  
  return (
  <>
    <ProjectGalleryWrapper>
        {
            data.galleryItem.map((item,i)=>{
                console.log(item)
                return (
                    <GalleryTypeItem key={i}>
                        {
                            item.marqueeText !== null && (
                                <MarqueRow textMarque={item.marqueeText} />
                            )
                        }
                        <GalleryImagesWrapper>
                            {
                                item.workTypeImages.map((image,i)=>{
                                    
                                    return (
                                        <GalleryImageContainer key={i} paddingItem={image.description} >
                                            <img src={image.file.url} />
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

