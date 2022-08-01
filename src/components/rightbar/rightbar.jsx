import React, { Component } from 'react';
import { RightBarWrapper } from './style';
import Person from './person/person';
import MagicBox from './magicbox/magicbox';
import Position from './position/position';

// RightBar 侧边栏
class RightBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return (
            <RightBarWrapper>
                <Person/>
                <Position/>
                <MagicBox/>
            </RightBarWrapper>
        );
    }
}
 
export default RightBar;