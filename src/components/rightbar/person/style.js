import styled from "styled-components";

// PersonWrapper 个人信息css
export const PersonWrapper = styled.div`

    margin: 15px 10px;
    text-align: center;

    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .name {
        font-size: 19px;
        font-weight: 600;
        color: #FF69B4;
        margin: 7px;
    }

    .schoolInfo {
        font-size: 13px;
        color: rgb(32, 157, 123);
        margin-top: 5px;
    }

    .personInfo {
        font-size: 13px;
        color: gray;
        margin-top: 5px;

        div {
            margin-top: 5px;
        }
    }

    .motto {
        color: rgb(32, 157, 123);
        margin: 10px;
        font-weight: bold;
        font-size: 15px;
    }

    .contactWay {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;

        div {
            position: relative;
            &:hover {
                img {
                    display: inline-block;
                    transform: translate(-50%, -100%);
                    width: 100px;
                }
            }

            img {
                display: none;
                transform: translate(-50%, -80%);
                position: fixed;
            }
        }
    }
`