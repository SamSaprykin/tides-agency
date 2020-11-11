import gsap from "gsap"




//Open menu
export const menuShow = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    delay:.05,
    duration: 2,
    height: "100%",
    transformOrigin: "right top",
    ease: "power1.inOut",
    stagger: {
      amount: .2,
    },
    y:"-100%"
  })
}

//Close menu
export const menuHide = (elem1, elem2) => {
  gsap.to([elem1, elem2], {
    duration: 1.2,
    opacity: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.5,
    },
  });
};

//Stagger links
export const staggerLinks = (elem1, elem2, elem3, elem4) => {
  gsap.from([elem1, elem2, elem3, elem4], {
    duration: 2.7,
    y: 82,
    delay: .6,
    ease: "power2.inOut",
    stagger: {
      amount: 0.5,
    },
  })
}

export const staggerLinksFast = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.4,
    y: 50,
    delay: 1.7,
    ease: "power2.inOut",
    
  })
}

export const staggerLinksSocial = (elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8) => {
  gsap.from([elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8], {
    duration: 1,
    y: 34,
    delay: 1.7,
    ease: "power2.inOut",
    stagger: {
      amount: 0.5,
    },
  })
}


export const staggerLinksHero = (elem1, elem2, elem3, elem4) => {
  gsap.from([elem1, elem2, elem3, elem4], {
    duration: 1.5,
    y: 110,
    delay: 0.9,
    ease: "power2.inOut",
    stagger: {
      amount: 0.4,
    },
  })
}

export const staggerParagraphs = (elem1, elem2, elem3, elem4, elem5, elem6) => {
  gsap.to([elem1, elem2, elem3, elem4, elem5, elem6], {
    duration: 1.5,
    marginTop: 0,
    delay: 0.9,
    ease: "power2.inOut",
    stagger: {
      amount: 0.01,
    },
  })
}





