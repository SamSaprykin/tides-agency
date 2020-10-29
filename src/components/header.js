import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styled from "styled-components"
import Navigation from "./Navigation/navigation"
import { Container } from "./layoutComponents"


const Header = ({ siteTitle, className }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);
  //toggle menu
  const handleMenu = () => {
    
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  
  return (
  <header className={className}>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <button onClick={handleMenu}>
        Menu
      </button>
      <Navigation state={state} />
    </Container>
  </header> 
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`

export default StyledHeader
