import './index.less';
import React, {Component} from 'react';
export default class WillHead extends Component {
    render() {
        return (
            <div className="RankHead">
                <div className="RankHead-title">
                    <h4>每月观影指南</h4>
                </div>
                <div className="RankHead-wrap">
                    <div className="RankHead-slider">
                        <div className="RankHead-product">
                            <div className="RankHead-tip">1</div>
                            <img src={require('./1.jpg')}/>
                            <b>32156人想看</b>
                            <h5>一个小电影一个小电影一个小电影</h5>
                            <p>12月25日上映</p>
                        </div>
                        <div className="RankHead-product">
                            <div className="RankHead-tip">2</div>
                            <img src={require('./1.jpg')}/>
                            <b>32156人想看</b>
                            <h5>一个小电影一个小电影一个小电影</h5>
                            <p>12月25日上映</p>
                        </div>
                        <div className="RankHead-product">
                            <div className="RankHead-tip">3</div>
                            <img src={require('./1.jpg')}/>
                            <b>32156人想看</b>
                            <h5>一个小电影一个小电影一个小电影</h5>
                            <p>12月25日上映</p>
                        </div>
                        <div className="RankHead-product">
                            <div className="RankHead-tip">4</div>
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