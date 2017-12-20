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
    let swipe = (this.props.sliders.length > 0 ?
        <ReactSwipe swipeOptions={swipeOptions}>
          {this.props.sliders.map((item, index) => (
            <div key={index}>
              <img src={item}/>
            </div>
          ))}
      </ReactSwipe>: null
    );

    return (
      <div className='hot-sliders'>
        {swipe}
        <div className="dots">
          {
            this.props.sliders.map((item, index) => (
              <span key={index} className={"dot " + (this.state.index == index ? "active" : "")}/>
            ))
          }
        </div>
      </div>

    )
  }
}
