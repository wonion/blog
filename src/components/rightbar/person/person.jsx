import React, { Component } from 'react';
import { PersonWrapper } from './style';
import { EnvironmentOutlined, MailOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons';
import { Divider } from 'antd';

// Person 个人信息
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return (
            <PersonWrapper>
                <img className='avatar' src='../../../images/avatar.JPG' alt=''></img>
                <div className='name'>Wonion</div>
                <div className='schoolInfo'><EnvironmentOutlined />河北 - 邢台</div>
                <div className='schoolInfo'>2018-2022 学生</div>
                <div className='personInfo'>
                    <div>前端: React + Ant Design</div>
                    <div>后端: Gin + mysql</div>
                    <div><MailOutlined /> 1216963622@qq.com</div>
                </div>
                <Divider orientation='center' className='divider'>
                    社交账号
                </Divider>
                <div className='contactWay'>
                    <div>
                        <QqOutlined style={{fontSize: "30px", color: "rgb(32, 157, 123)"}}/>
                        <img src="../../../images/QQ.png" alt="QQ" />
                    </div>
                    <div>
                        <WechatOutlined style={{fontSize: "30px", color: "rgb(32, 157, 123)"}}/>
                        <img src="../../../images/wechat.png" alt="Wechat" />
                    </div>
                </div>
            </PersonWrapper>
        );
    }
}
 
export default Person;