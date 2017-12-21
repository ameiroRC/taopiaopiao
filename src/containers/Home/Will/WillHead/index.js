import './index.less';
import React, {Component} from 'react';
import $ from 'jquery';

export default class WillHead extends Component {
    constructor(){
        super();
        this.state = {month:'January'};
    }
    handleClick=(e)=>{
        let month = e.target.dataset.month;
        this.setState({month});//以上改变标签颜色
        let today = month==='January'?100:month==='February'?200:300;
        let $cur;
        $('.WillHead-product p').each((index,item)=>{
            let day = $(item).html().replace(/[^0-9]/g,'');
            if(day>=today){
                $cur = $(item);
                return false;
            }
        });
        $('.WillHead-slider').stop().animate({left:$cur.parent().index()*-140},500)
    };
    render() {
        let style = {
            width:this.props.willHead.list.length*140+'px'
        };
        return (
            <div className="WillHead">
                <div className="WillHead-title">
                    <h4>每月观影指南</h4>
                    <div className="WillHead-month" onClick={this.handleClick}>
                        <a href="###" className={this.state.month==='January'?'active':''} data-month='January'>1月</a>
                        <a href="###" className={this.state.month==='February'?'active':''} data-month='February'>2月</a>
                        <a href="###" className={this.state.month==='March'?'active':''} data-month='March'>3月</a>
                    </div>
                </div>
                <div className="WillHead-wrap">
                    <div ref={div=>this.slider=div} className="WillHead-slider" style={style}>
                        {
                            this.props.willHead.list.map((item,index)=>(
                                <div key={item.id} className="WillHead-product">
                                    <div className="WillHead-tip">预售</div>
                                    <img src={item.img}/>
                                    <b>{item.like}人想看</b>
                                    <h5>{item.title}</h5>
                                    <p>{item.releaseTime}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}