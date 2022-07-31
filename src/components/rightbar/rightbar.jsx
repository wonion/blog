import React, { Component } from 'react';
import { RightBarWrapper } from './style';
import Person from './person/person';
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
            </RightBarWrapper>
        );
    }
}
 
export default RightBar;