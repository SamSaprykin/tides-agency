import React, { useEffect, useState, useRef } from "react"
import { Cursor } from "../styles/globalStyles"

const CustomCursor = ({ toggleMenu }) => {
  
  const cursor = useRef(null);

  const onMouseMove = event => {
    const { clientX, clientY } = event
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        className="pointer"
        ref = {cursor}
      />
    </>
  )
}

export default CustomCursor
