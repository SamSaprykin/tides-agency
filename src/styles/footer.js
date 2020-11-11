import styled, {keyframes} from "styled-components"

export const FooterWrapper = styled.div`
    max-width:1002px;
    margin:0 auto;
    padding:17px 0 0;
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
    height:140px;
    position:relative;
    overflow:hidden;
    p {
        position:absolute;
    }
`
const from360to0 = keyframes`
    from{transform:rotate(360deg)};
    to{transform:rotate(0deg)};
`;

const from0to360 = keyframes `
    from{transform:rotate(0)};
    to{transform:rotate(360deg)};
` 
    

export const FooterContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-bottom:72px;
    #Circle1 {
        animation: ${from0to360} 1s linear infinite;
        cx: 140;
        cy: 145;
        r: 100;
        transform-origin: 145px 150px;
    }
    #Circle2 {
        animation: ${from360to0} 2s linear infinite;
        cx: 150;
        cy: 155;
        r: 100;
        transform-origin: 155px 150px;
      }
      
      #Circle3 {
        animation: ${from360to0} 2.5s linear infinite;
        cx: 145;
        cy: 150;
        r: 100;
        transform-origin: 150px 145px;
      }
      
      #Circle4 {
        animation: ${from360to0} 2.5s linear infinite;
        cx: 160;
        cy: 150;
        r: 100;
        transform-origin: 150px 155px;
      }
`

export const FooterSocial = styled.ul`
    list-style:none;
    overflow: hidden;
    position: relative;
    width:160px;
    li {
        margin-left:-24px;
        transition: margin-left .2s ease-in-out;
        svg {
            margin-right:8px;
        }
        :hover {
            margin-left:0;
            a {
                color:#1A6AFF;
            }
            svg {
                path {
                    fill: #1A6AFF !important;
                }
            }
        }
        a {
            display:flex;
            flex-direction:row;
            align-items:center;
            color:#E8ECF3;
            font-size:31px;
            line-height:36px;
            font-family: Bandeins Sans;
            font-weight:400;
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
    transition: all .2s ease-in-out;
    svg {
        position:absolute;
        z-index:-10;
        opacity:0;
        transition: all .2s ease-in-out;
    }
    :hover {
        color:#191B1C;
        font-size:22px;
        width:300px;
        height:300px;
        border:none;
        transition: all .2s ease-in-out;
        svg {
            opacity:1;
        }
    }
`

export const AdressWrapper = styled.div`
    height:80px;
    position:relative;
    overflow:hidden;
    p {
        position:absolute;
    }
`

export const TitleItem = styled.h5`
    color:#E8ECF3;
    font-size:20px;
    line-height:34px;
    font-family: Bandeins Sans;
    font-weight:400;
    margin-bottom:50px;
    height:34px;
    position:relative;
    overflow:hidden;
    p {
        position:absolute;
    }
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

export const TransformBorder = styled.div`
    transform:rotate(180deg);

`

export const ButtonContainer = styled.div`
    width:300px;
    height:300px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`



/*

https://tympanus.net/Development/DistortedButtonEffects/

function initBt4() {
  var bt = document.querySelectorAll('#component-4')[0];
  var bg = document.querySelectorAll('#component-4 .button')[0];
  var blob = document.querySelectorAll('#component-4 .blob');
  var filter = document.querySelector('#filter-goo-4 feGaussianBlur');

  bt.addEventListener('mousemove', function(e) {
    var x = (e.pageX - bt.offsetLeft - bt.offsetWidth / 2) * 0.6;
    var y = (e.pageY - bt.offsetTop - bt.offsetHeight / 2) * 0.6;

    TweenLite.to(blob[1], 4.2, { x: x, y: y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[2], 2.8, { x: x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[3], 2.8, { x: -x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(filter, 5, { onUpdate: function() { filter.setAttribute('x', 0); }});
  });

  bt.addEventListener('mouseup', function(e) {
    var x = e.pageX - bt.offsetLeft - blob[0].offsetWidth / 2;
    var y = e.pageY - bt.offsetTop - blob[0].offsetHeight / 2;

    var dirX = Math.random() > 0.5 ? -1 : 1;
    var dirY = Math.random() > 0.5 ? -1 : 1;
    var r = getRandom(60, 80);
    
    Array.prototype.slice.call(blob, 1).forEach(function(bt) {
      var tl = new TimelineLite();
      tl.to(bt, 1.2, { x: dirX * r * Math.random() + '%', y: dirY * r * Math.random() + '%', ease: Elastic.easeOut.config(1, 0.2) });
      tl.to(bt, 1.2, { x: '0%', y: '0%', ease: Elastic.easeOut.config(1, 0.2) }, '-=1.1');
    });
  });
}

*/

