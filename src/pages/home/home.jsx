import React, { Component } from 'react';
import { HomeWrapper } from './style';
import Header from '../../components/header/header';
import RightBar from '../../components/rightbar/rightbar';
import Content from '../../components/content/content';

// Home 首页
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() { 
        return (
            <HomeWrapper>
                <Header/>
                <div className='main'>
                    <Content/>
                    <RightBar/>
                </div>
            </HomeWrapper>
        );
    }
}
 
export default Home;