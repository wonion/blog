import React, { Component } from 'react';
import { ApplicationWrapper } from './style';

// Application 应用
class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <ApplicationWrapper>
                <h1>application</h1>
            </ApplicationWrapper>
        );
    }
}
 
export default Application;