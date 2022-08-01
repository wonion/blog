import React, { Component } from 'react';
import { PositionWrapper } from './style';
import { HeartOutlined } from "@ant-design/icons";

// Position 位置信息
class Position extends Component {
    state = {  } 
    render() { 
        return (
            <PositionWrapper>
                <HeartOutlined />
            </PositionWrapper>
        );
    }
}
 
export default Position;