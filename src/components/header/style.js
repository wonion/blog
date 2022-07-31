import styled from "styled-components";

// HeaderWrapper 导航栏css
export const HeaderWrapper = styled.div`
    background-color: #fb7299;
    height: 50px;
    width: 100%;

    // header-left 导航栏左侧
    .header-left {
        float: left;
        margin-left: 15%;

        .header-name {
            font-size: 22px;
            font-weight: 700;
            line-height: 50px;
            color: yellow;
            cursor: pointer;    // 设置鼠标悬浮上面的样式
            display: inline;
        }

        .header-motto {
            font-size: 12px;
            color: white;
            line-height: 50px;
            margin-left: 10px;
            display: inline;
            
        }
    }

    // header-right 导航栏右侧
    .header-right {
        line-height: 50px;
        margin-left: 50%;
        margin-right: 15%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .tab-item {
            width: 100%;
            display: flex;
            cursor: default;
            color: white;

            .item-icon {
                margin-right: 10px;
            }

            .item-name {
                font-size: 13px;
            }

            &:hover {
                color: deepskyblue;
            }
        }

        .tab-active {
            color: yellow;
        }
    }

    

`