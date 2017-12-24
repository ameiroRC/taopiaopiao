import React,{Component} from "react";
import "./index.less";

export default class Payment extends Component{
    jishiqi = function(){
            var i = 100;
            var timer = setInterval(function(){
                if(i== -1){
                    clearInterval(timer);
                }else{
                    document.body.innerHTML = i;
                    --i;
                }
            },1000);

        }

    render(){
        return(
            <div>
       <div className="money">
           <div className="move">
               <span className="move-span">{this.props.location.state.title}</span>
               <span className="move-span2">1张</span>
               {/*<i className="iconfont icon-jishiqi"><span
                   className="jishiqi">100</span></i>*/}
               <p className="move_today">今天 {this.props.location.state.playTime[0]} (国语 2D)</p>
               <p className="move_address">星美国际影商城上海松江店</p>
               <p className="move_zuo">2号厅 1排1座</p>
           </div>

               <div className="activity">
                   <p className="activity1">特惠活动</p>
                   <p className="activity2">已省7.2元</p>
               </div>
<div className="total">
    <p className="total1">票价总计</p>
    <p className="total2">含服务费 5元/张</p>
    <p className="total3">32.8元</p>
</div>
           <div className="know">
               <p className="go">购票须知</p>
               <p className="read">1.由于设备故障等不可抗力因素，存在少量场次取消的情况，会进行退票退款<br/>2.由于影院系统不稳定等因素，存在出票失败的情况，会进行退款<br/>3.取票码不再通过短信发送，可在“钱包-卡券”或“淘票票-我的-电影票”中查看<br/>4.下单即代表你同意<a href="https://h5.m.taopiaopiao.com/app/dianying/pages/alfheim/content.html?id=924&amp;interact=no&amp;hidetitle=yes" data-tap="1">《淘票票用户服务协议》</a></p>
           </div>
           <div className="pay">
               <a href="https://h5.m.taobao.com/app/movie/pages/index/rule-desc.html?cinemaid=4290&type=2&orderid=&spm=a1z2r.7661907.index-order-pay.id_refund_endorse" className="tui">退改签须知</a>
               <p className="pay1">应付 32.8元</p>
           </div>
           <div className="perform">
           <a href="">立即付款</a>
       </div>
           </div>
            </div>
        )
    }
}