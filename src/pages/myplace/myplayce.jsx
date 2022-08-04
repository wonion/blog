import React, { Component } from 'react';
import { MyPlaceWrapper } from './style';

// MyPlace 我的空间
class MyPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <MyPlaceWrapper>
                <h1>MyPlace</h1>
            </MyPlaceWrapper>
        );
    }
}
 
export default MyPlace;