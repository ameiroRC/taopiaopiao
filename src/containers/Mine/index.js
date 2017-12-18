import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';

export default class Mine extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={require('../../images/profile.png')}/>
                    <div>
                         <Link to="/login">立即登录</Link>
                    </div>
                </div>
                <ul className="list-crow">

                    <li>
                        <i className={'iconfont icon-dianying'}/>
                        <span>电影票</span>
                    </li>
                    <li>
                        <i className={'iconfont icon-dianying'}/>
                        <span>优惠卡</span>
                    </li>
                    <li>
                        <i className={'iconfont icon-dianying'}/>
                        <span>影城卡</span>
                    </li>
                    <li>
                        <i className={'iconfont icon-dianying'}/>
                        <span>演出票</span>
                    </li>
                </ul>
                <ul className="list-row">
                    <li>
                       <span>想看的电影</span>
                        <i>1</i>
                    </li>
                    <li>
                        <span>想看的电影</span>
                        <i>1</i>
                    </li>
                    <li>
                        <span>想看的电影</span>
                        <i>1</i>
                    </li>
                    <li>
                        <span>想看的电影</span>
                        <i>1</i>
                    </li>
                    <li>
                        <span>想看的电影</span>
                        <i>1</i>
                    </li>
                </ul>
                <div className="breakOut">退出</div>
            </div>
        )
    }
}
