import React, { Component } from 'react';
import { PositionWrapper } from './style';
import { HeartOutlined } from "@ant-design/icons";

// Position 位置信息
class Position extends Component {
    state = {  } 
    render() { 
        return (
            <PositionWrapper>
                <div className='position'>
                    <div>您的ip: </div>
                    <div>您的地址: </div>
                    <div>hi, 你好, 现在是time, msg</div>
                </div>
                <HeartOutlined />
            </PositionWrapper>
        );
    }
}
 
export default Position;