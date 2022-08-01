import styled from "styled-components";

// MagicBoxWrapper 魔法盒子css
export const MagicBoxWrapper = styled.div`
    .picture {
        z-index: 9999999;
        height: 300px;
        margin-top: 40px;
        transform: scale(0.7);
    }
    .picture .wrap {
        height: 200px;
        perspective: 1000px;
        position: absolute;
    }
    .picture .wrap .cube {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        position: absolute;
        transform-style: preserve-3d;
        animation: 15s linear 0s infinite normal none running rotate;
    }
    .picture .wrap .cube div {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        text-align: center;
        font-size: 40px;
        color: white;
        transition: all 0.3s ease-in 0s;
        border-radius: 10px;
    }
    .picture .wrap .cube .front {
        transform: translateZ(-100px);
        width: 150px;
        height: 150px;
    }
    .picture .wrap .cube .back {
        transform: translateZ(100px);
    }
    .picture .wrap .cube .right {
        transform: rotateY(90deg) translateZ(-100px);
    }
    .picture .wrap .cube .left {
        transform: rotateY(90deg) translateZ(100px);
    }
    .picture .wrap .cube .top {
        transform: rotateX(90deg) translateZ(100px);
    }
    .picture .wrap .cube .bottom {
        transform: rotateX(-90deg) translateZ(100px);
    }
    .picture img {
        width: 100%;
        border-radius: 20%;
    }

    /* hover */
    .wrap .cube:hover .front {
        background-color: blue;
        opacity: 0.8;
        transition: transform 0.3s ease-in;
        transform: translateZ(-200px);
    }
    .wrap .cube:hover .back {
        background-color: #ffc0cb;
        opacity: 0.8;
        transform: translateZ(200px);
    }
    .wrap .cube:hover .right {
        background-color: darkred;
        opacity: 0.8;
        transform: rotateY(90deg) translateZ(-200px);
    }
    .wrap .cube:hover .left {
        background-color: cyan;
        opacity: 0.8;
        transform: rotateY(90deg) translateZ(200px);
    }
    .wrap .cube:hover .top {
        background-color: grey;
        opacity: 0.8;
        transform: rotateX(90deg) translateZ(200px);
    }
    .wrap .cube:hover .bottom {
        background-color: #ffff00;
        opacity: 0.8;
        transform: rotateX(-90deg) translateZ(200px);
    }

    /* 小盒子 */
    .picture .wrap .cube i {
        display: inline-block;
        top: 50%;
        left: 50%;
        width: 150px;
        height: 150px;
        margin-left: -75px;
        margin-top: -75px;
        position: absolute;
    }
    .picture .wrap .cube .i_front {
        transform: translateZ(-75px);
    }
    .picture .wrap .cube .i_back {
        transform: translateZ(75px);
    }
    .picture .wrap .cube .i_right {
        transform: rotateY(90deg) translateZ(-75px);
    }
    .picture .wrap .cube .i_left {
        transform: rotateY(90deg) translateZ(75px);
    }
    .picture .wrap .cube .i_top {
        transform: rotateX(90deg) translateZ(75px);
    }
    .picture .wrap .cube .i_bottom {
        transform: rotateX(-90deg) translateZ(75px);
    }
    /*:hover*/
    @keyframes rotate {
        0% {
            transform: rotateY(0deg) rotateX(360deg);
        }

        100% {
            transform: rotateY(360deg) rotateX(0deg);
        }
    }
`