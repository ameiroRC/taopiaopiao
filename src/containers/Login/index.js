import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <div className="login-panel">
        <div className="login-logo">
          <img src={require('../../images/profile.png')} alt=""/>
        </div>
        <input  type="text" placeholder="用户名"/>
        <input  type="text" placeholder="密码"/>
        <Link to="/reg">前往注册</Link>
        <div
          className="login-btn">登&nbsp;录
        </div>
      </div>
    )
  }
}
