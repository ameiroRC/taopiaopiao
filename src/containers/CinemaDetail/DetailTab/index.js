import React, {Component} from 'react';
import './index.less'
export default class DetailTab extends Component {
    render() {
        console.log(this.props);
        return (
            <div id='div1'>
                <div className="Tab">

                </div>
                <span className='fanhui' onClick={()=>this.props.history.go(-1)}>
                    &lt;</span>
            </div>

        )
    }
}
