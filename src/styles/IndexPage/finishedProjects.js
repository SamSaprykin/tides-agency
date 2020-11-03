import styled from "styled-components"



export const FinishedProjectsWrapper = styled.div`
    background-color:#191B1C;
    padding-top:50px;
    max-width:1302px;
    margin:0 auto;
`

export const WrapperBoard = styled.div`
    background-color:#E8ECF3;
`

export const WrapperContent = styled.div`
    padding:50px 145px 80px;
    display:flex;
    flex-direction:column;

`

export const Titleprojects  = styled.h2`
    font-size:57px;
    line-height:116px;
    text-transform:uppercase;
    letter-spacing: 0.05em;
    font-family: Verona Serial;
    color:#191B1C;
    padding-bottom:19px;
    border-bottom:1px solid #191B1C;
`

export const DescriptionWrapper = styled.div`
    padding:50px 0 100px;
    display:flex;
    flex-drection:column;
    justify-content:space-between;
    align-items:flex-start;
`

export const Description = styled.h5`
    width:29%;
    text-transform:uppercase;
    font-size:28px;
    line-height:36px;
    font-family: Bandeins Sans;
`

export const Information = styled.p`
    width:60%;
    font-family: Bandeins Sans;
    font-size:24px;
    line-height:36px;
    text-align:justify;
`

export const ProjectsLinks  = styled.ul`
    list-style:none;
`

export const ProjectItem = styled.li`
    display:flex;
    flex-direction:row;
    align-items:center;
    border-bottom:1px solid #191B1C;
    padding:21px 0;
    justify-content:space-between;
    height:88px;
    transition: all .5s;
    :hover {
        padding:21px 30px;
        background-color:#191B1C;
        
    }
    div {
        text-align:left;
        width:100%;
        max-width:300px;
        
        
    }
    
    
`
export const WorkType = styled.span `
padding:0 4px;
font-family:Bandeins Sans;
font-size:20px;
line-height:34px;
color: #191B1C;
font-weight:400;
${ProjectItem} : hover & {
    color:#E8ECF3;
}
`

export const IconItem = styled.img`
    width:120px;
    margin-bottom:0;
    ${ProjectItem}:hover & {
        filter: invert(1);
    }
`

export const WorkYear = styled.h5`
    color: #191B1C;
    margin-bottom:0;
    font-size:20px;
    line-height:34px;
    font-family:Bandeins Sans;
    font-weight:400;
    ${ProjectItem} : hover & {
        color:#E8ECF3;
    }
`

export const ArrowWork = styled.img`
    width:13px;
    height:13px;
    ${ProjectItem}:hover & {
        filter: invert(1);
    }
`