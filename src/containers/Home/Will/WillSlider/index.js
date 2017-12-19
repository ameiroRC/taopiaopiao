import './index.less';
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class WillSlider extends Component{
    constructor(){
        super();
        this.state = {index:0};
    }
    render(){
        let swipeOptions = {
            auto: 3000,
            continuous: true,
            callback: (index, elem)=>{
                this.setState({index});
            }
        };
        return (
            <div className="WillSlider">
              <div className="WillSlider-wrap">
                  <ReactSwipe className="carousel WillSlider-items" swipeOptions={swipeOptions}>
                      <div className="WillSlider-item">
                          <img src={require('./2.jpg')}/>
                      </div>
                      <div className="WillSlider-item">
                          <img src={require('./2.jpg')}/>
                      </div>
                  </ReactSwipe>
                  <div className="WillSlider-dots">
                      <span className={'WillSlider-dot '+(this.state.index===0?'active':'')}></span>
                      <span className={'WillSlider-dot '+(this.state.index===1?'active':'')}></span>
                  </div>
              </div>
            </div>
        )
    }
}