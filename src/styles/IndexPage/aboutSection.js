import styled from "styled-components"
import { device } from "../constants"


export const WrapperAbout = styled.div`
    margin:110px auto 180px;
    width:100%;
    height:100%;
    background-color: #191B1C;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    @media ${device.laptop} {
        margin-top:30px;
    }
    @media ${device.tablet} {
        margin:0px auto 50px;
    }
`

export const TextSectionAbout = styled.div`
    width:100%;
`


export const AboutDescription = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    position:relative;
    overflow:hidden;
    
    p {
        color:#FFFFFF;
        font-size:38px;
        line-height:50px;
        font-family: Bandeins Sans;
        font-weight:400;
        padding-bottom:80px;
        max-width:1002px;
        @media ${device.laptopL} {
            max-width:960px;
        }
        @media ${device.laptop} {
            max-width:744px;
        }
        @media ${device.tablet} {
            max-width:588px;
            font-size:28px;
            line-height:42.7px;
        }
        @media ${device.mobileL} {
            padding:0 20px;
            font-size:22px;
            line-height:28.93px;
            margin-bottom:50px;
        }
        span {
            color:#1A6AFF;
            font-family:Stinger Wide;
            font-weight:400;
            font-size:38px;
            line-height:123.8%;
            @media ${device.tablet} {
                font-size:28px;
                line-height:34px;
            }
            @media ${device.mobileL} {
                font-size:22px;
            }
        }
    }
`

export const ImpactAreasAbout = styled.div`
    width:100%;
    margin:0 auto;
    
`


export const ImpactAreasTitle = styled.h4`
    font-size:60px;
    line-height:116px;
    letter-spacing:0.05em;
    color: #E8ECF3;
    font-family:Verona Serial;
    font-weight:400;
    text-transform:uppercase;
    width:100%;
    max-width:1002px;
    margin:0 auto;
    position:relative;
    height:165px;
    overflow:hidden;
    @media ${device.laptopL} {
        max-width:960px;
    }
    @media ${device.laptop} {
        font-size:46px;
        line-height:116px;
        height:124px;
        max-width:744px;
    }
    @media ${device.tablet} {
        font-size:38px;
        line-height:116px;
        height:116px;
        max-width:588px;
        margin-bottom:16px;
    }
    @media ${device.mobileL} {
        padding:7px 20px 0;
        font-size:28px;
        line-height:32px;
        height:68px;
    }
    p {
        position:absolute;
    }
    
`

export const ImpactAreasList = styled.ul`

    li {
        text-align:center;
        h5 {
            -webkit-text-stroke: 2px #E8ECF3;
            font-family: Bandeins Sans;
            text-transform:uppercase;
            font-size:80px;
            line-height:140px;
            color:transparent;
            width:100%;
            padding:0 0 17px !important;
            max-width:1002px;
            text-align:left;
            box-sizing: border-box;
            position:relative;
            z-index:2;
            @media ${device.tablet} {
                line-height: 100px;
            }
            @media ${device.mobileL} {
                height: 150px;
            }
            :hover {
                @media ${device.tablet} {
                    opacity: 1 !important;
                }
            }
                
            
            p {
                @media ${device.tablet} {
                    font-size:60px;
                    -webkit-text-stroke: 1px #E8ECF3;
                }
                @media ${device.mobileL} {
                    font-size:32px;
                    line-height:53px;
                    -webkit-text-stroke: 0.5px #E8ECF3;
                }
            }
            @media ${device.laptopL} {
                max-width:960px;
            }
            @media ${device.laptop} {
                max-width:744px;
                padding:59px 0 50px;
            }
            @media ${device.tablet} {
                max-width:588px;
            }
            @media ${device.mobileL} {
                padding:0 20px !important;
            }
        }
        
    }
`

export const DescriptionArea = styled.div`
    width:100%;
    background-color:#E8ECF3;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    z-index:3;
    @media ${device.tablet} {
        max-width:588px;
        background-color:#191B1C;
        margin:0 auto;
    }
`

export const DescriptionItems = styled.ul`
    max-width:1002px;
    width:100%;
    border-top:1px solid #191B1C;
    list-style:none;
    padding:52px 0;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    @media ${device.tablet} {
        color:#E8ECF3;
        font-size:22px;
        padding:0;
    }
    @media ${device.mobileL} {
        flex-direction:column;
    }
    li {
        font-size:28px;
        line-height:36px;
        font-family: Bandeins Sans;
        font-weight:400;
        width:33%;
        flex-grow: 1;
        text-align:left;
        margin-bottom:17px;
        height:36px;
        position:relative;
        overflow:hidden;
        :nth-of-type(3n) {
            padding-left:15%;
        }
        :nth-of-type(2) {
            padding-left:5%;
        }
        :nth-of-type(5) {
            padding-left:5%;
        }
        @media ${device.tablet} {
            font-size:22px;
        }
        @media ${device.mobileL} {
            padding:0 40px !important;
            line-height:29px;
            margin-bottom:0;
            width:100%;
        }
        p {
            height:36px;
            margin-top:36px;
            position:absolute;

        }
    }
`

export const Marque = styled.div`
    height:188px;  
    @media ${device.tablet} {
        height:0;
        position:relative !important;
        margin-top:-32px; 
        z-index:1 !important;
    }
    @media ${device.mobileL} {
        margin-top:-50px; 
    }
    button {
        @media ${device.tablet} {
           display:none;
           height:0 !important;
        }
    }
    
    .runner {
        @media ${device.tablet} {
            opacity: 0;
        }
    }
    .marquee__inner {
        @media ${device.tablet} {
            background-color:transparent;
            height:0;
            padding:0;
        }
    }
    
`

export const ButtonPlusMinus = styled.button`
  color: #ecf0f1;
  background: transparent;
  width: 50px;
  height: 50px;
  border: 0;
  font-size: 1.5em;
  position: relative;
  right:0;
  outline:none;
  transition: .3s;
  display:none;
  @media ${device.mobileL} {
    width: 38px;
    height: 38px;
  }
  @media ${device.tablet} {
    display:block;
  }
  span {
    position: absolute;
    transition: .3s;
    background: #1A6AFF;
    display:block;
  }
  span:first-of-type {
    top: 25%;
    bottom: 25%;
    width:5px;
    height: 25px;
    left: 45%;
    @media ${device.mobileL} {
        width: 3.8px;
        height:19px;
    }
  }
  
  span:last-of-type {
    left: 25%;
    right: 25%;
    height: 5px;
    width: 25px;
    @media ${device.mobileL} {
        height: 3.8px;
        width: 19px;
    }
    top: 45%;
  }
  span:last-of-type {
    left: ${({ open }) => {
        if (open === true) return `50%;`
        if (open === false) return `25%;`
    }};;
    right:${({ open }) => {
        if (open === true) return `50%;`
        if (open === false) return `25%;`
    }};;
  }
  span:first-of-type, button span:last-of-type {
    transform: ${({ open }) => {
        if (open === true) return `rotate(90deg);`
        if (open === false) return `rotate(0deg);`
    }};
  }
`

export const WrapperTitle = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  
`

