import React, { Component } from 'react';
import { RecordWrapper } from './style';

// Record 记录
class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <RecordWrapper>
                <h1>Record</h1>
            </RecordWrapper>
        );
    }
}
 
export default Record;