import './index.less';
import React,{Component} from 'react';
export default class WillFilm extends Component{
    render(){
        return (
            <div className="WillFilm">
                <h4>12月12号</h4>
                <div className="WillFilm-content">
                    <img src={require('./1.jpg')}/>
                    <div className="rightContent">
                        <h5>悔恨</h5>
                        <p><span>2175</span>人想看</p>
                        导演：<span>张耀光</span><br/>
                        主演：<span>张乃歌 赵今夏</span>
                        <a href="###">想看</a>
                    </div>
                </div>
            </div>
        )
    }
}