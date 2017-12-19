import React, {Component} from 'react';
import "./index.less";
export default class Sell extends Component {
    render() {
        return (
            <div>
            <div>
               <div className="before">
                   <p className="before-p1">芳华</p>
                   <p className="before-p2">今天  12-18 16:30 (国语 2D)</p>
               </div>
                <div className="iconfont">
                    <i className='iconfont icon-zuowei_kexuan'>可选</i>
                    <i className="iconfont icon-xuanzuoweixuan-chushou">已售</i>
                    <i className="iconfont icon-xuanzuowei-yixuan">已选</i>
                </div>
            </div>
                <div className="main">
                    <div className="main-d">
                <ul className="main-ul">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                        </ul>
                    </div>
                </div>
           </div>
        )
    }
}
