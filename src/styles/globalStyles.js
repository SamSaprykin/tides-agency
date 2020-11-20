import styled from "styled-components"
import { device } from "./constants"

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 48px;
  height: 48px;
  background: none;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 2px solid white !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
    border: 4px solid #ea281e;
  }
  
 

  &.nav-open,
  &.locked {
    border: 4px solid red !important;
  }
  @media ${device.tablet} {
    display:none;
  }
`