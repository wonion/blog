import React, { Component } from 'react';
import { PositionWrapper } from './style';
import { HeartOutlined } from "@ant-design/icons";

// Position 位置信息
class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() { 
        return (
            <PositionWrapper>
                <div className='title'>
                    飞奔向你
                    <HeartOutlined />
                </div>
                <div className='position'>
                    <div>您的ip: </div>
                    <div>您的地址: </div>
                    <div>hi, 你好, 现在是time, msg</div>
                </div>
                
            </PositionWrapper>
        );
    }
}
 
export default Position;