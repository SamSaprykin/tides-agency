import React from "react"
import { 
    AuthorsWrapper,
    AuthorsContainer,
    AuthorsList,
    AuthorsListTitle,
} from "../../../styles/ProjectPage/authorsProjectSection"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"
const authorsList  = [
    {
        position: "Art Direction",
        name: "Jonathan Crowe",
    },
    {
        position: "Graphic Design",
        name: "Mariia Yatsenko",
    },
    {
        position: "UI/UX Design",
        name: "Pablo Cucchi",
    },
    {
        position: "Project Manager",
        name: "Rachel Crowe",
    },
    {
        position: "Developers",
        name: "Miranda Gomez Tejada",
    },
    {
        position: "Special Thanks",
        name: "Milosz Bazela, Lubos Kmetko",
    }
]

const AuthorsProjectSection = ({ }) => {
  return (
  <>
    <AuthorsWrapper>
        <AuthorsContainer>
            <AuthorsListTitle>Project Team</AuthorsListTitle>
            <AuthorsList>
                {
                    authorsList.map((author,i)=>{
                        return (
                            <li key={i}>{author.position} - {author.name}</li>
                        )
                    })
                }
            </AuthorsList>
        </AuthorsContainer>
        <StainsBackground rotate="-6deg" top="-10%" left="-35%" height="800px"/>
    </AuthorsWrapper>
 
  </>
  )
}
  




export default AuthorsProjectSection