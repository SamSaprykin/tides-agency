import styled, {keyframes} from "styled-components"

export const FooterWrapper = styled.div`
    max-width:1002px;
    margin:0 auto;
    border-top:1px solid #E8ECF3;
    border-bottom:1px solid #E8ECF3;
    padding:17px 0 72px;
    position:relative;
`

export const FooterTitle = styled.h3`
    font-size:60px;
    line-height:140px;
    letter-spacing:0.05em;
    color:#E8ECF3;
    font-family: Verona Serial;
    font-weight:400;
    text-transform:uppercase;
`

export const FooterContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const FooterSocial = styled.ul`
    list-style:none;
    li {
        a {
            color:#E8ECF3;
            font-size:31px;
            line-height:36px;
            font-family: Bandeins Sans;
            font-weight:400;
            margin-bottom:50px;
            margin-bottom:4px;
        }
        
    }
`

export const FooterAdress = styled.div`
    display:flex;
    flex-direction:column;
    span {
        font-size:31px;
        font-family: Bandeins Sans;
        font-weight:400;
        color:#E8ECF3;
        max-width:254px;
        margin-top:-11px;
        line-height:36px;
    }
`
const fill = keyframes`
  from {
    top:270px;
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    top:-100px;
    transform: translateX(-50%) rotate(-360deg);
  }
`;

export const FooterButton = styled.button`
    width:236px;
    height:236px;
    background-color:transparent;
    border-radius: 100%;
    border:1px solid #FFCC00;
    color:#FFCC00;
    font-size:20px;
    line-height:34px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    font-family: Bandeins Sans;
    font-weight:400;
    position:relative;
    overflow:hidden;
    outline:none;
    transition: all 1.2s ease-in-out;
    :hover {
        color:#191B1C;
        font-size:28px;
        :before {
            content:"";
            position:absolute;
            z-index:-1;
            width:400px;
            height:400px;
            background:#FFCC00;
            left:50%;
            transform:translateX(-50%);
            border-radius:38%;
            animation: ${fill} 4s ease-in-out;
        }
    }
    
    
`



export const TitleItem = styled.h5`
    color:#E8ECF3;
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    font-weight:400;
    margin-bottom:50px;
`

export const ClockWrapper = styled.div`
    margin-top:88px;
    color:#E8ECF3;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    span {
        font-size:20px;
        line-height:34px;
    }
    
    div {
        width:200px;
        text-align:left;
        display:flex;
        
        time {
            color:#E8ECF3;
            font-size:31px;
            line-height:36px;
            font-family: Bandeins Sans;
        }
    }
    
`


export const FooterFooter = styled.div`
    padding: 67px 0 50px;
    max-width:1002px;
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const BackToTop = styled.div`
    span {
        font-size:20px;
        line-height:34px;
        font-family: Bandeins Sans;
        color:#E8ECF3;
        margin-left:10px;
    }
    svg {
        transform: rotate(-90deg);
    }
`

export const RightsText = styled.p`
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    color:#E8ECF3;
`