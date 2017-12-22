import './index.less';
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {connect} from 'react-redux';
export default class WillSlider extends Component{
    constructor(){
        super();
        this.state = {index:0};
    }
    render(){
        let swipeOptions = {
            auto: 4000,
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
                          <img src={require('./1.jpg')} alt=""/>
                      </div>
                      <div className="WillSlider-item">
                          <img src={require('./2.jpg')} alt=""/>
                      </div>
                      <div className="WillSlider-item">
                          <img src={require('./3.jpg')} alt=""/>
                      </div>
                  </ReactSwipe>
              </div>
            </div>
        )
    }
}