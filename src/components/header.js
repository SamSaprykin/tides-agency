import React, {useState} from "react"
import Navigation from "./Navigation/navigation"
import { useScrollPosition } from "../hooks/useScroll"
import TidesIcons from "./DecorationElements/tidesIcons"
import { Link } from 'gatsby'
import {  
    HeaderNavWrapper,
    HeaderLogo,
    HeaderMenuButtonWrapper,
    LogoImage,
    ButtonMenu,
    IconWaveWrapper,
} from "../styles/header"

const Header = () => {
    const [position, setPostition] = useState(null)

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

  
    // State of our button
    const [hovered, setHovered] = useState(false);

    const onMouseEnterHandler = () => {
        setHovered(true)
    }
    
    useScrollPosition(({ prevPos, currPos }) => {
        setPostition(currPos.y)
        },
        [position]
    );
    
    
    const onMouseLeaveHandler = () => {
        const timeout = setTimeout(() => {
            setHovered(false);
        }, 400);
    }

    
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
     <>
       <HeaderNavWrapper  secondaryColor={position}>
        <Link to="/">
          <HeaderLogo>
            <LogoImage src="/logo_tides.svg"  />
          </HeaderLogo>
        </Link>
        <HeaderMenuButtonWrapper>
          <ButtonMenu 
            onClick={handleMenu}
            onMouseOver={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}   
          >
            <span>Menu</span>
            <IconWaveWrapper   
              hovered={hovered}
            >
              <TidesIcons type="wavewMenuIcon" />
            </IconWaveWrapper>   
          </ButtonMenu>
        </HeaderMenuButtonWrapper>
      </HeaderNavWrapper>
      <Navigation state={state} setState={setState} />
     </>
    )
}

export default Header