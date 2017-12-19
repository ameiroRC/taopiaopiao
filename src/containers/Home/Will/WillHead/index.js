import './index.less';
import React, {Component} from 'react';
export default class WillHead extends Component {
    render() {
        return (
            <div className="WillHead">
                <div className="WillHead-title">
                    <h4>每月观影指南</h4>
                    <div className="WillHead-month">
                        <a href="###" className="active">1月</a>
                        <a href="###">2月</a>
                        <a href="###">3月</a>
                    </div>
                </div>
                <div className="WillHead-wrap">
                    <div className="WillHead-slider">
                        <div className="WillHead-product">
                            <div className="WillHead-tip">预售</div>
                            <img src={require('./1.jpg')}/>
                            <b>32156人想看</b>
                            <h5>一个小电影一个小电影一个小电影</h5>
                            <p>12月25日上映</p>
                        </div>
                        <div className="WillHead-product">
                            <div className="WillHead-tip">预售</div>
                            <img src={require('./1.jpg')}/>
                            <b>32156人想看</b>
                            <h5>一个小电影一个小电影一个小电影</h5>
                            <p>12月25日上映</p>
                        </div>
                        <div className="WillHead-product">
                            <div className="WillHead-tip">预售</div>
                            <img src={require('./1.jpg')}/>
                            <b>32156人想看</b>
                            <h5>一个小电影一个小电影一个小电影</h5>
                            <p>12月25日上映</p>
                        </div>
                        <div className="WillHead-product">
                            <div className="WillHead-tip">预售</div>
                            <img src={require('./1.jpg')}/>
                            <b>32156人想看</b>
                            <h5>一个小电影一个小电影一个小电影</h5>
                            <p>12月25日上映</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}