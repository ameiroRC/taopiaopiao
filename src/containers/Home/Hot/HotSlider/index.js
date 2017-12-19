import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';


export default class HotSlider extends Component {
  constructor() {
    super();
    this.state = {index: 0};
  }

  render() {
    let swipeOptions = {
      auto: 2000,//轮播间隔时间
      continuous: true,//是否启用无缝轮播
      callback: (index) => {
        this.setState({index});
      }
    };
    let swipe = (
      <ReactSwipe swipeOptions={swipeOptions}>
        {
          this.props.sliders.map((item,index)=>{

          })
        }
      </ReactSwipe>
    );

    return (
      <div>

      </div>
    )
  }
}
