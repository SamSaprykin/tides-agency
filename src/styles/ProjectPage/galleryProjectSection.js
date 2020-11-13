import styled from "styled-components"

export const ProjectGalleryWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    position:relative;
    height:auto;
    
`


export const GalleryTypeItem = styled.div`
    width:100%;
    overflow:hidden;
    position:relative;  
`

export const GalleryImagesWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    flex-wrap:wrap;
    margin:0 auto;
    max-width:1002px;
    width:100%;
    padding-top:80px;
    
`

export const GalleryImageContainer = styled.div`
    padding:${props => props.paddingItem};
    background-color:#E8ECF3;
    box-sizing:border-box;
    margin-bottom:60px;
    img {
        width:100%;
    }
`
