
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
     id="morphing-animation" x="0px" y="0px" viewBox="0 0 200 120" overflow="scroll">
  
  <filter id="animate">
    
    <feTurbulence type="fractalNoise" seed="-10"
                  numOctaves="7" baseFrequency="0.015" />
   
    <feColorMatrix type="hueRotate" values="0">
      <animate attributeName="values"
               values="0;360" dur="4s" repeatCount="indefinite" />
    </feColorMatrix>
    
    <feColorMatrix type="matrix"
                   values="1 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 0 0 0 1" />
    
     <feMorphology operator="dilate" radius="1" /> -->
    <feMorphology operator="erode" radius="1" /> -->
    <feGaussianBlur stdDeviation="1" /> -->
   
    <feDisplacementMap in="SourceGraphic" scale="15" 
                       xChannelSelector="R" yChannelSelector="B" />
 
    <feBlend mode="soft-light" in2="SourceGraphic"/> -->
     <feComposite operator="in" in2="SourceGraphic"/> -->
  </filter>
  
  <circle filter="url(#animate)" fill="#FFCC00" 
          cx="100" cy="30" r="25" />
  <rect filter="url(#animate)" fill="#202020" 
             x="50" y="10" width="100" height="100" /> -->
</svg>