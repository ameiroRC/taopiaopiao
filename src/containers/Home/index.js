import React, {Component} from 'react';
import HomeTab from "./HomeTab/index";
import Searches from '../../components/Searches'
import './index.less'

export default class Home extends Component {
  render() {
    return (
      <div className={'home'}>
        <Searches/>
        <HomeTab/>
      </div>
    )
  }
}
