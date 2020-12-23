import React from "react"
import { 
    AuthorsWrapper,
    AuthorsContainer,
    AuthorsList,
    AuthorsListTitle,
} from "../../../styles/ProjectPage/authorsProjectSection"
import StainsBackground from "../../DecorationElements/stainsBackgrounds"


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