import React, {Component} from 'react';
import './index.less'
import HotSlider from "./HotSlider/index";
import {connect} from 'react-redux';
import actions from '../../../store/actions/home-hot';
import HotMovie from "./HotMovie/index";
import {upLoadMore, downRefresh} from '../../../utils'


class Hot extends Component {
  componentDidMount() {
    this.props.fetchSliders();
    this.props.fetchHotMovie();
    downRefresh(this.content, this.props.refreshHotMovie);
    upLoadMore(this.content,this.props.fetchHotMovie);
  }

  render() {
    return (
      <div className={'hot'}>
        <div className={'hot-logo'}/>
        <div ref={content => this.content = content} className={'hotContent'}>
          <HotSlider sliders={this.props.sliders.list}/>
          <HotMovie
            hotMovies={this.props.hotMovies.list}
          />
          <div className={'load'}>
            {this.props.hotMovies.hasMore? <img src={require('../../../images/1.gif')}/>:null}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.homeHot,//把仓库中的状态对象映射为组件的属性对象
  actions
)(Hot)