import styled, {keyframes} from "styled-components"

const glitch = keyframes`
    0% {
        -webkit-transform: translate3d(calc(-1 * 10px),0,0) scale3d(-1,-1,1);
        transform: translate3d(calc(-1 * 10px),0,0) scale3d(-1,-1,1);
        -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
    2% {
        -webkit-clip-path: polygon(19% 74%, 75% 84%, 75% 100%, 0% 100%);
        clip-path: polygon(19% 74%, 75% 84%, 75% 100%, 0% 100%);
    }
    4% {
        -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
    5% {
        -webkit-clip-path: polygon(100% 0%, 100% 0%, 5% 50%, 0% 10%);;
        clip-path: polygon(100% 0%, 100% 0%, 5% 50%, 0% 10%);;
    }
    6% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        
    }
    7% {
        -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    8% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    9% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
        clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
    9.9% {
        -webkit-transform: translate3d(calc(-1 * 10px),0,0) scale3d(-.5,-.5,1);
        transform: translate3d(calc(-1 * 10px),0,0) scale3d(-.5,-.5,1);
    }
    10%, 100% {
        -webkit-transform: translate3d(0,0,0) scale3d(1,1,1);
        transform: translate3d(0,0,0) scale3d(1,1,1);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`;

export const GlitchEffect = styled.div`
    -webkit-animation-name: ${glitch};
    animation-name: ${glitch};
    -webkit-animation-duration:  3s;
    animation-duration:  3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
`



