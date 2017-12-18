import React, {Component} from 'react';
import {Link} from "react-router-dom";
import HomeTab from "./HomeTab/index";
import './index.less'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to={'/city'} className={'city'}>北京<span/></Link>
        <Link to={'/search'} className={'search'}><span/>搜影片，影院，影人</Link>
        <HomeTab/>
      </div>
    )
  }
}
