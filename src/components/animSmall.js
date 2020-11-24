import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import useWindowSize from "../hooks/useWindowSize"
const AnimSmall = ({ children, delay }) => {
  const controls = useAnimation()
  const size = useWindowSize();
  const [ref, inView] = useInView({
    rootMargin: size.width > 425 ? "-100px" : "-10px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    
  }, [controls, inView])
  
  return (
    <motion.p
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
        y: 0,
        opacity:1,
        transition: { duration: .5, delay:delay, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {opacity:0,  y: 22 },
      }}
    >
      {children}
    </motion.p>
  )
}

export default AnimSmall