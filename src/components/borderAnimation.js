import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const AnimBorder = ({ children, delay }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: "100px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
        width: `100%`,
        opacity:1,
        transition: { duration: .4, delay:delay, ease: "linear" },
        },
        hidden: {  width: `0%` },
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimBorder