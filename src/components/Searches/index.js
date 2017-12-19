import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './index.less'

export default class Searches extends Component {
  render() {
    return (
      <div className={'search'}>
        <Link to={'/city'} className={'city'}>北京<span/></Link>
        <Link to={'/search'} className={'search'}><span/>搜影片，影院，影人</Link>
      </div>
    )
  }
}
