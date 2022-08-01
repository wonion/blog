import React, { Component } from 'react';
import { MagicBoxWrapper } from './style';

// MagicBox 魔法盒子
class MagicBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <MagicBoxWrapper>
                <div class="picture">
                <div class="wrap">
                    <div class="cube">
                        <div class="front"><img src="../../../images/avatar.JPG" alt="" /></div>
                        <div class="back"><img src="../../../images/avatar.JPG" alt="" /></div>
                        <div class="right"><img src="../../../images/avatar.JPG" alt="" /></div>
                        <div class="left"><img src="../../../images/avatar.JPG" alt="" /></div>
                        <div class="top"><img src="../../../images/avatar.JPG" alt="" /></div>
                        <div class="bottom"><img src="../../../images/avatar.JPG" alt="" /></div>
                        <i class="i_front"><img src="../../../images/avatar.JPG" alt="" /></i>
                        <i class="i_back"><img src="../../../images/avatar.JPG" alt="" /></i>
                        <i class="i_right"><img src="../../../images/avatar.JPG" alt="" /></i>
                        <i class="i_left"><img src="../../../images/avatar.JPG" alt="" /></i>
                        <i class="i_top"><img src="../../../images/avatar.JPG" alt="" /></i>
                        <i class="i_bottom"> <img src="../../../images/avatar.JPG" alt="" /> </i>
                    </div>
                </div>
            </div>
            </MagicBoxWrapper>
        );
    }
}
 
export default MagicBox;