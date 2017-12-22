import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Mine extends Component {
    handleLogout = ()=>{
        this.props.logout();
    }
    render() {
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={require('../../images/profile.png')}/>
                    <div>
                        {
                          this.props.user?<p>{this.props.user.username}</p>:<Link to="/login">立即登录</Link>
                        }
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
                {
                    this.props.user&&<div onClick={this.handleLogout} className="breakOut">退出</div>
                }
            </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(Mine);