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
                         <Link to="/login">登录</Link>
                    </div>
                    {
                        <div>退出</div>
                    }
                </div>
            </div>
        )
    }
}
