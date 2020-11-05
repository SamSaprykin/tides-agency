import styled from "styled-components"


export const WrapperAbout = styled.div`
    margin-top:110px;
    width:100%;
    height:100%;
    background-color: #191B1C;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    margin-bottom:180px;
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
        
        span {
            color:#1A6AFF;
            font-family:Stinger Wide;
            font-weight:400;
            font-size:38px;
            line-height:123.8%;
        }
    }
`

export const ImpactAreasAbout = styled.div`
    width:100%;
    
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
        p {
            height:36px;
            margin-top:36px;
            position:absolute;

        }
    }
`

export const Marque = styled.div`
    height:188px;   
`

