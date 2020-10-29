import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Text Intro
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: "back",
  });
};

//Open menu
export const menuShow = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    delay:.05,
    duration: 2,
    height: "100%",
    transformOrigin: "right top",
    ease: "power1.inOut",
    stagger: {
      amount: -0.1,
    },
    y:"-100%"
  })
}

//Close menu
export const menuHide = (elem1, elem2) => {   
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: "100%",
    ease: "power4.inOut",
    stagger: {
      amount: 0.07,
    },
  })
}

//Stagger links
export const staggerLinks = (elem1, elem2, elem3) => {
  gsap.from([elem1, elem2, elem3], {
    duration: 3,
    y: 100,
    delay: .6,
    ease: "power2.inOut",
    stagger: {
      amount: 0.5,
    },
  })
}



