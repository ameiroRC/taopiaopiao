import React, {Component} from 'react';
import './index.less'
import HotSlider from "./HotSlider/index";
import {connect} from 'react-redux';
import actions from '../../../store/actions/home-hot';
import HotMovie from "./HotMovie/index";


class Hot extends Component {
  componentDidMount() {
    this.props.fetchSliders();
    this.props.fetchHotMovie();
  }

  render() {
    console.log(this.props);
    return (
      <div className={'hot'}>
        <HotSlider sliders={this.props.sliders.list}/>
        <HotMovie hotMovies={this.props.hotMovies.list}/>
      </div>
    )
  }
}

export default connect(
  state => state.homeHot,//把仓库中的状态对象映射为组件的属性对象
  actions
)(Hot)