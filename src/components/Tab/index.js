import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';//NavLink比Link能多实现一个高亮效果
import './index.less'

export default class Tab extends Component {
  render() {
    return (
      <div className={'tab'}>
        <nav>
          <NavLink exact to={'/'}>
            <i className={'iconfont icon-dianying'}/>
            <span>电影</span>
          </NavLink>
          <NavLink exact to={'/cinema'}>
            <i className={'iconfont icon-yingyuana'}/>
            <span>影院</span>
          </NavLink>
          <NavLink exact to={'/mine'}>
            <i className={'iconfont icon-taopiaopiao1'}/>
            <span>我的</span>
          </NavLink>
        </nav>
      </div>
    )
  }
}
