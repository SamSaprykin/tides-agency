import React, {useEffect, useRef, useState} from 'react'
import { gsap, CSSPlugin } from "gsap"
import { Link } from "gatsby"
import Wave from 'react-wavify'
import Helmet from 'react-helmet'
import anime from 'animejs'



import { 
    HamburgerMenu,
    MenuSecondaryBackgroundColor,
    MenuLayer,
    MenuContainer,
    MenuWrapper,
    MenuLinks,
    MenuInfo,
    SocialLinks,
    SocialLinksItem,
    EmailTides,
    MenuHeader,
    LogoWrapper,
    CloseButtonWrapper,
    WrapperText,
    Hamburger,
  } from "../../styles/navigation"


import {
    menuShow,
    menuHide,
    staggerLinks,
    staggerLinksFast,
    staggerLinksSocial,
} from '../animate'

const plugins = [ CSSPlugin ];

const Navigation = ({ state, setState }) => {
   //create refs for our DOM elements
  
  const [menuClosing, setMenuClosing] = useState(false);
  let menuWrapper = useRef(null)
  let show1 = useRef(null)
  let show2 = useRef(null)

  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let line4 = useRef(null)
  let line5 = useRef(null)
  let line6 = useRef(null)
  let line7 = useRef(null)
  let line8 = useRef(null)
  let line9 = useRef(null)
  let line10 = useRef(null)
  let line11 = useRef(null)
  let line12 = useRef(null)
  let line13 = useRef(null)
  let line14 = useRef(null)
  

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      menuHide(show2, show1);
      // Set menu to display none
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to(show1, {
        duration: 0,
        opacity: 1,
        height: "100%",
        y:"100%"
      })
      gsap.to(show2, {
        delay:0.9,
        duration: 0,
        opacity: 1,
        height: "100%",
        y:0,
      });
      menuShow(show1, show2);
      
      staggerLinks(line3, line4, line5, line6);
      staggerLinksFast(line1, line2);
      staggerLinksSocial(line7,line8,line9,line10,line11,line12,line13,line14)
    }
  }, [state])
  const handleMenu = () => {
    
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setMenuClosing(true)
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
    
    <HamburgerMenu ref={(el) => (menuWrapper = el)} className="hamburger-menu">
      <MenuSecondaryBackgroundColor
        ref={(el) => (show1 = el)}
      >
        <Wave fill='gray'
        className="first"
        paused={false}
          options={{
            height: 90,
            amplitude: 90,
            speed: 0.4,
            points: 6
          }}
        />
        <Wave fill='lightgray'
        className="second"
        paused={false}
          options={{
            height: 80,
            amplitude: 80,
            speed: 0.4,
            points: 6
          }}
        />
        <Wave fill='gray'
        className="third"
        paused={false}
          options={{
            height: 60,
            amplitude: 60,
            speed: 0.4,
            points: 6
          }}
        />
        <Wave fill='#191B1C'
        className="four"
        paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.4,
            points: 6
          }}
        >
        </Wave>
      </MenuSecondaryBackgroundColor>
      <MenuLayer ref={(el) => (show2 = el)} className="menu-layer">
        <MenuContainer className="container">
          <MenuWrapper className="wrapper">
            <MenuHeader>
              <LogoWrapper ref={(el) => (line1 = el)}>
                <img src="/logo.png" />
                <h5>
                  tides agency
                </h5>
              </LogoWrapper>
              <CloseButtonWrapper ref={(el) => (line2 = el)}>
                <div>
                  <span>
                    Close
                  </span>
                  <button onClick={handleMenu}>
                    <Hamburger />
                  </button>
                </div>
                
              </CloseButtonWrapper>
            </MenuHeader>
            <MenuLinks className="menu-links">
              <nav className="color-layer">
                <ul>
                  <li>
                    <h2 ref={(el) => (line3 = el)}>
                      <Link to="/about-us">
                        Home
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 ref={(el) => (line4 = el)}>
                      <Link to="/about-us">
                        About us
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 ref={(el) => (line5 = el)}>
                      <Link to="/about-us">
                        Case study
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 ref={(el) => (line6 = el)}>
                      <Link to="/about-us">
                        Contact
                      </Link>
                    </h2>
                  </li>
                </ul>
              </nav>
              <MenuInfo  className="info">
                <WrapperText >
                  <h5 ref={(el) => (line7 = el)}>Social Media</h5>
                </WrapperText>
                
                <SocialLinks>
                  
                      <SocialLinksItem 
                          
                      >
                        <h3 ref={(el) => (line8 = el)}>
                          <a 
                            href="https://dribbble.com/"
                            target="_blank"
                          >
                            Dribble
                          </a>
                        </h3>
                        
                        
                      </SocialLinksItem>
                      <SocialLinksItem 
                          
                      >
                        <h3 ref={(el) => (line9 = el)}>
                          <a 
                            href="https://dribbble.com/" 
                            target="_blank"
                          >
                            Behance
                          </a>
                        </h3>
                        
                        
                      </SocialLinksItem>  
                      <SocialLinksItem 
                          
                      >
                        <h3 ref={(el) => (line10 = el)}>
                          <a 
                            href="https://dribbble.com/" 
                            target="_blank"
                          >
                            Instagram
                          </a>
                        </h3>
                        
                        
                      </SocialLinksItem>  
                      <SocialLinksItem 
                         
                      >
                        <h3 ref={(el) => (line11 = el)}>
                          <a 
                            href="https://dribbble.com/"
                            target="_blank"
                          >
                            Facebook
                          </a>
                        </h3>
                        
                        
                      </SocialLinksItem>  
                      <SocialLinksItem 
                          
                      >
                        <h3 ref={(el) => (line12 = el)}>
                          <a 
                            href="https://dribbble.com/" 
                            target="_blank"
                          >
                            Twitter
                          </a>
                        </h3>
                        
                        
                      </SocialLinksItem>        
                   
                </SocialLinks>
                <WrapperText >
                  <h5 ref={(el) => (line13 = el)}>Contact</h5>
                </WrapperText>
                <WrapperText ref={(el) => (line14 = el)}>
                  <EmailTides>
                    info@tides.agency
                  </EmailTides>
                </WrapperText>
                
              </MenuInfo>
            </MenuLinks>
          </MenuWrapper>
        </MenuContainer>
      </MenuLayer>
    </HamburgerMenu>
    </>
  );
}

export default Navigation