import React, {Component} from 'react';
import './index.less'
import HotSlider from "./HotSlider/index";
import image from '../../../images/banner.png';

export default class Hot extends Component {
  constructor() {
    super();
      this.state={sliders:[image,image,image]}
  }

  componentDidMount(){
    // this.props.fetchSliders();
  }

  render() {
    return (
      <div className={'hot'}>
        <HotSlider sliders={this.props.sliders}/>
      </div>
    )
  }
}
