import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'

export default class Period extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    selectDate(event) {
        let num = +event.target.getAttribute('data-num');
        if (num) {
            this.setState({
                num: num
            })
        }
    }

    render() {
        return (
            <section id="period">
                <div className='tab-wrap'>
                    <section className="sel-date rel" onClick={this.selectDate.bind(this)}>
                        <ul className="rel">
                            <li data-num="0">
                                <span data-num="0">今天 12-23</span>
                                <span data-num="0" className="font-icon">惠</span>
                            </li>
                            <li data-num="1">
                                <span data-num="1">明天 12-24</span>
                                <span data-num="1" className="font-icon">惠</span>
                            </li>
                            <li data-num="2">
                                <span data-num="2">周一 12-25</span>
                                <span data-num="2" className="font-icon">惠</span>
                            </li>
                            <li data-num="3">
                                <span data-num="3">周二 12-26</span>
                                <span data-num="3" className="font-icon">惠</span>
                            </li>
                        </ul>
                        <span className="move abs" style={{left: `${2.1 * this.state.num}px`}}></span>
                    </section>
                    <div className="tips">
                        <span className='div1'>促</span>
                        <span className='div2'>温馨提示:开场前15分钟关闭在线售票</span>
                        <span className='div3'>俩个活动</span>
                    </div>
                    <section className="play-date">
                        <section style={{display: this.state.num === 0 ? 'block' : 'none'}}>
                            <ul className="pdate">
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">13:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">15:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">16:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">20:13散场</span>
                                            <span className="item-hall">6号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </section>
                        <section style={{display: this.state.num === 1 ? 'block' : 'none'}}>
                            <ul className="pdate">
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">11:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">13:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">13:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">15:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section style={{display: this.state.num === 2 ? 'block' : 'none'}}>
                            <ul className="pdate">
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">09:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">10:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">09:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">10:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">09:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">10:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">09:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">10:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">12:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">15:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section style={{display: this.state.num === 3 ? 'block' : 'none'}}>
                            <ul className="pdate">
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">11:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">15:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <div className="pd">
                                            <span className="item-clock">13:20</span>
                                            <p>
                                                <span className="item-type">国语 3D</span>
                                                <span className="item-act">特惠</span>
                                                <span className="price">37元</span>
                                            </p>
                                            <span className="item-end">15:13散场</span>
                                            <span className="item-hall">5号厅</span>
                                            <span className="item-pre old">80元</span>
                                            <div className="btn-wrap">
                                                <Link to={{pathname:`/sell/${this.props.num}`,state:this.props.All}}
                                                      className="tpp-btn tpp-btn-outline-primary">购票</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}
