import { useState, useEffect } from "react";

export function useScroll() {
  const isBrowser = typeof window !== `undefined`
  if(isBrowser) {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();
 

  
    const listener = e => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
      setLastScrollTop(-bodyOffset.top);
    };
    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });
    return {
      scrollY,
      scrollX,
      scrollDirection
    };
  }
  if(!isBrowser) {
    return {
      scrollY:0,
      scrollX:0,
      scrollDirection:'none'
    }
  }

}