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

const AuthorsProjectSection = ({data}) => {
  return (
  <>
    <AuthorsWrapper>
        <AuthorsContainer>
            <AuthorsListTitle>Project Team</AuthorsListTitle>
            <AuthorsList>
                {
                    data.teamMember.map((author,index) => {
                        return (
                            <li key={index}>{author}</li>
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