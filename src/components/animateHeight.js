import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const AnimHighParagraph = ({ children, delay, top }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: "50px",
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
        transition: { duration: .6, delay:0.02, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {  opacity:0,y: 100 },
      }}
    >
      {children}
    </motion.p>
  )
}

export default AnimHighParagraph