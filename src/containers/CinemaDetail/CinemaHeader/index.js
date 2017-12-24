import React, {Component} from 'react';
import './index.less';
export default class CinemaHeader extends Component {
    render() {
        return (
            <header className="header">
                <div className='header-row'>
                    <a className='cinema-link'>
                    <div className='name'>{this.props.state.cinema}</div>
                    <div className="cinema-address">{this.props.state.location}</div>
                    <ul className='cinema-tags'>
                        <li className='cinema-tag'>退票</li>
                        <li className='cinema-tag'>改签</li>
                        <li className='cinema-tag'>3D眼睛</li>
                        <li className='cinema-tag'>儿童优惠</li>
                        <li className='cinema-tag'>可停车</li>
                        <li className='cinema-tag'>WIFI</li>
                    </ul>
                    </a>
                </div>
                <div className='cinema-banners'>
                    <a href="https://h5.m.taobao.com/app/moviediscount/pages/bank-card/index.html?fromcinema=true&cityCode=310100">
                        <div className='div1'>10元观影红包</div>
                        <div className='div2'>电信积分兑换专区</div>
                    </a>
                </div>
            </header>
        )
    }
}


