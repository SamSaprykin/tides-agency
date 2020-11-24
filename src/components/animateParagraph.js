import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import useWindowSize from "../hooks/useWindowSize"
const AnimParagraph = ({ children, delay, top }) => {
  const size = useWindowSize();
  console.log(size.width)
  const controls = useAnimation()
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
        transition: { duration: .8, delay:.2, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {opacity:0,  y: 80 },
      }}
    >
      {children}
    </motion.p>
  )
}

export default AnimParagraph