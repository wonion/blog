import React, { Component } from 'react';
import { HeaderWrapper } from './style';
import { tabList, iconList } from '../constants';

// Header 导航栏
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
        this.changeTab = this.changeTab.bind(this);
    }

    // changeTab 改变Tab
    changeTab(id) {
        // todo 切换页面
        this.setState({
            currentIndex: id
        });
    }

    render() { 
        return (
            <HeaderWrapper>
                <div className='header'>
                    <div className='header-left'>
                        <div className='header-name'>Wonion</div>
                        <div className='header-motto'>有一所向阳的房子，面向大海，春暖花开</div>
                    </div>
                    <div className='header-right'>
                        {tabList.map((item, id) => {
                            return (
                                <div className={['tab-item', this.state.currentIndex === id ? 'tab-active' : ""].join(" ")} onClick={() => {this.changeTab(id)}} key={id}>
                                    <span className='item-icon'>{iconList[id]}</span>
                                    <span className='item-name'>{item.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </HeaderWrapper>
        );
    }
}
 
export default Header;