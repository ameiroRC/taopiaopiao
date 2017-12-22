import React, {Component} from 'react';
import './index.less'
export default class DetailTab extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="Tab">
                    <span className='MoveTitle'>你的名字</span>
                </div>
                <span className='fanhui' onClick={()=>this.props.history.go(-1)}><i className='iconfont icon-fanhui'></i></span>
                <span className='fenxiang'><i className='iconfont icon-fenxiang'></i></span>
            </div>

        )
    }
}
