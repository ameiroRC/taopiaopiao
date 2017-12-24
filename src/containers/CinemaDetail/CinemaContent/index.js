import React, {Component} from 'react';
import './index.less'
import Period from "../Period/index";
export default class CinemaContent extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }

    selectDate(event) {
        let num = +event.target.getAttribute('data-num');
        console.log(event.target);
        this.setState({num});
        }

    render() {
        let bg ={backgroundImage:'url("//gw.alicdn.com/i3/TB12V0Iiv6H8KJjSspmXXb2WXXa_.jpg_20x20.jpg")'}
        return (
            <div>
                <div className='scroll-wrap'>
                    <div
                        style={bg}
                        className='box-bg'>
                        <div className='scroll-layer' >
                            <ul onClick={this.selectDate.bind(this)}>
                            {
                                this.props.All.map((item,index)=>(
                                    <li data-num={index} key={index}>
                                        <a href="javascript:void(0)" data-num={index}>
                                            <img data-num={index} src={item.img} alt=""/>
                                        </a>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    this.props.All.map((item,index)=>(
                        <div
                            key={index}
                            className='movie-name'
                             style={{display: this.state.num === index ? 'block' : 'none'}}>
                            <a href="">
                                <span className='name'>{item.title}</span>
                                <span className='pingfen'>{item.grade}分</span>
                                <p>{item.time} |{item.starring}</p>
                            </a>
                        </div>
                    ))
                }
                <Period All={this.props.All[this.state.num]} num={this.state.num}/>
            </div>
        )
    }
}
