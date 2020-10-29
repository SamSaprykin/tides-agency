import React, {useState, useEffect, useRef} from "react"
import { ListPreloading, ListItem, WrapperPreloading,  } from "../../styles/preloading"
import { TimelineMax , TweenLite, CSSPlugin } from "gsap";

const plugins = [ CSSPlugin ];

const Preloading = () => {
    const [count, setCount] = useState(0);
    const ListItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    let app = useRef(null);
    
    let listPre = useRef(null);
    
    let listRefs = useRef([]);
    let tl = new TimelineMax();

    useEffect(() => {
      if(listPre && listPre.current !== null) {
        tl.add(TweenLite.fromTo(listPre, .4, {y: "100%"},{y: "0"}),"+=.5")
        
      }
      if(app && app.current !== null) {
        tl.add(TweenLite.fromTo(app, .1, {css: {backgroundColor: 'black'}},{css: {backgroundColor: 'transparent' }}))
      }
      
      if(listRefs && listRefs.current !== null) {
        tl.add(TweenLite.fromTo(listRefs.current, .5, {height: "30px"}, {height: "0px" }),"+=.2")
      }
      tl.from(app,.1,{y:"0"})
      tl.to(app,.1,{y:"-100%"})

    },[])

    const addToRefs = (el) => {
      if (el && !listRefs.current.includes(el)) {
        listRefs.current.push(el);
      }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
           setCount(1);
         }, 3000);
        
       },[]);
    return (
        <WrapperPreloading
          ref={el => app = el}
        >
            <ListPreloading
                ref={el => listPre = el}
            >
                {ListItems.map(listItem => (
                    <ListItem 
                        key={listItem}
                        ref={addToRefs}
                    ></ListItem>            
                ))}
            </ListPreloading>
        </WrapperPreloading>
    )
}




export default Preloading



/*

const Preloading = () => {
    const [count, setCount] = useState(0);
    const ListItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    
    useEffect(() => {
        const timeout = setTimeout(() => {
           setCount(1);
         }, 3000);
        
       },[]);
    return (
        <WrapperPreloading
            initial={{ backgroundColor: "black"}}
            animate={{ backgroundColor: "transparent"}}
            transition={{ duration: 1, delay:3 }}
        >
            <ListPreloading
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ duration: 1,staggerChildren: -1.2, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
                {ListItems.map(listItem => (
                    <ListItem 
                        key={listItem} 
                        initial={{  height:"5vh"}}
                        animate={{ height: "0" }}
                        transition={{ duration:1 ,delay:5, ease: [0.6, 0.05, -0.01, 0.9] }}
                    ></ListItem>            
                ))}
            </ListPreloading>
            <LogoWrapper>
                <LogoImage 
                    src="/logo.png"
                    initial={{ x: "100px", opacity:0 }}
                    animate={{ x: "0", opacity:1 }}
                    transition={{ duration: 1,delay:.7, ease: [0.6, 0.05, -0.01, 0.9] }} 
                />
                <TextLogo>
                    
                        <TextInfo
                            initial={{ marginTop: "80px" }}
                            animate={{ marginTop: "0px" }}
                            transition={{ duration: 1.4,delay:1.1, ease: [0.6, 0.05, -0.01, 0.9] }}
                        >
                            TIDES AGENCY
                        </TextInfo>
                    
                </TextLogo>
            </LogoWrapper>
        </WrapperPreloading>
    )
}

*/






