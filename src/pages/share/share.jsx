import React, { Component } from 'react';
import { ShareWrapper } from './style';

// Share 分享
class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <ShareWrapper>
                <h1>Share</h1>
            </ShareWrapper>
        );
    }
}
 
export default Share;