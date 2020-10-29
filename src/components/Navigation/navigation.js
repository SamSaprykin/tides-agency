import React, {useEffect, useRef} from 'react'
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
  } from "../../styles/navigation"

  

    


import {
    menuShow,
    menuHide,
    staggerLinks,
    textIntro,
  } from '../animate'

const plugins = [ CSSPlugin ];



const Navigation = ({ state }) => {
   //create refs for our DOM elements
  
  let menuWrapper = useRef(null)
  let show1 = useRef(null)
  let show2 = useRef(null)
  let info = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)

  if (typeof window !== `undefined`) {
    var bioLayerIn = anime.timeline();
    bioLayerIn
    .add({
      targets: ['.color-layer'],
      translateX: '10%',
      easing: 'easeInOutQuint',
      duration: 400
    })
    .add({
      targets: ['.color-layer'],
      translateX: '30.1%',
      easing: 'easeInOutQuint',
      duration: 430,
      delay:5
    });
  }

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
      textIntro(info);
      staggerLinks(line1, line2, line3);
    }
  }, [state])
  
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
        <Wave fill='black'
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
            <MenuLinks className="menu-links">
              <nav className="color-layer">
                <ul>
                  <li>
                    <h2 ref={(el) => (line1 = el)}>
                      <Link to="/about-us">
                        About
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 ref={(el) => (line2 = el)}>
                      <Link to="/about-us">
                        About
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 ref={(el) => (line3 = el)}>
                      <Link to="/about-us">
                        About
                      </Link>
                    </h2>
                  </li>
                </ul>
              </nav>
              <MenuInfo ref={(el) => (info = el)} className="info">
                <h3>Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsam nesciunt dolores, 
                  similique minus perspiciatis non repudiandae 
                  dolore nulla eos dicta, libero molestias eaque omnis excepturi! Est corporis earum fuga.
                </p>
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