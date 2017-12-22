import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
import Alert from "../../components/Alert/index";
class Reg extends Component {
    back = () => {
        this.props.history.goBack();
    };
    handleReg = () => {
        let username = this.username.value;
        let password = this.password.value;
        let regPas = /^[0-9a-zA-Z]{6,12}$/;
        if (password.length === 0) {
            alert('密码不能为空哦')
        return false;
    }
        if (!regPas.test(password)) {
        alert('密码得由6~12位数字和字母组成')
        return false;
    }
        this.props.reg({username, password});
    }

    checkPhone=()=>{
        let phone = this.phone.value;
        let regPhone = /^1\d{10}$/;
        if (phone.length === 0) {
            alert('电话号码不能为空');
            return false;
        }
        if (!regPhone.test(phone)) {
            alert('要输入正确电话号码');
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="reg-panel">
                <i className="iconfont icon-fanhui" onClick={this.back}>X</i>
                <div className="reg-logo">
                    <img src={require('../../images/profile.png')} alt=""/>
                </div>
                <input ref={input => this.username = input} type="text" placeholder="用户名"/>
                <input ref={input => this.phone = input} onBlur={this.checkPhone} type="text" placeholder="请输入电话号码"/>
                <input ref={input => this.password = input} type="text" placeholder="密码"/>
                <Link to="/login">直接登录</Link>
                <div
                    onClick={this.handleReg}
                    className="reg-btn">注&nbsp;册
                </div>
                <Alert/>
            </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(Reg);
