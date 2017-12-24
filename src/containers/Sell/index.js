import React, {Component} from 'react';
import "./index.less";
import {Link} from 'react-router-dom'

export default class Sell extends Component {
    constructor() {
        super();
        this.state = {selected:[]};
    }
  onClick = (e) => {
        if(!e.target.dataset.id)return;
        let id = e.target.dataset.id;
        if(this.state.selected.length===0){//[]
            this.setState({selected:[...this.state.selected,id]});//[1]
            this.tab.className += 'main-show';//'main-choose main-show'
        }else if(this.state.selected.length===1&&id===this.state.selected[0]){//[1]
            this.tab.className = 'main-choose ';//'main-choose 'opacity:0  [1]
            //没有通过this.setState改变状态，那么this.state.selected=[1]
            //需求：当我再次点击当前座位的时候，取消座位的选中状态
            this.setState({selected:[]})//这一步，目的就是让原来this.state.selected=[1]的状态，变成this.state.selected=[]，相当于取消了选座的状态
        }


      if(e.target.className==='iconfont icon-zuowei_kexuan'){
            e.target.className='iconfont icon-xuanzuowei-yixuan';
          e.target.style.color = 'green';
        }else{
            e.target.className='iconfont icon-zuowei_kexuan';
            e.target.style.color = 'white';
        }
  };

    render() {
        console.log(this.props.location.state);
        return (

            <div className={'all'}>
                <div>
                    <div className="before">
                        <p className="before-p1">{this.props.location.state.title}</p>
                        <p className="before-p2">今天 12-18 {this.props.location.state.playTime[0]} (国语 2D)</p>
                    </div>
                    <div className="iconfont">
                        <i className='iconfont icon-zuowei_kexuan'></i><p>可选</p>
                        <i className="iconfont icon-xuanzuoweixuan-chushou"></i><p>已售</p>
                        <i className="iconfont icon-xuanzuowei-yixuan"></i><p>已选</p>
                    </div>
                </div>
                <div className="main">
                    <div className="main-header">
                        <div className="header-n">3号厅银幕</div>
                    </div>
                    <ul className="main-ul">
                        <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li>
                    </ul>
                    <div className="main-big">
                        <div
                            onClick={this.onClick}
                            className="main-right">
                            <ul>
                                <li><i data-id={1}
                                       className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={2} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={3} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={4} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={5} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={6} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={7} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={8} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={9} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={10} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={11} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div
                            onClick={this.onClick}
                            className="main-right2">
                            <ul>
                                <li><i data-id={12} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={13} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={14} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={15} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={16} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={17} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={18} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={19} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={20} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={21} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={22} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div
                            onClick={this.onClick}
                            className="main-right3">
                            <ul>
                                <li><i data-id={23} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={24} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={25} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={26} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={27} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={28} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={29} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={30} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={31} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={32} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={33} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={34} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right4">
                            <ul>
                                <li><i data-id={35} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={36} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={37} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={38} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={39} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={40} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={41} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={42} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={43} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={44} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={45} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={46} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right5">
                            <ul>
                                <li><i data-id={47} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={48} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={49} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={50} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={51} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={52} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={53} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={54} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={55} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={56} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={57} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={58} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right6">
                            <ul>
                                <li><i data-id={59} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={60} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={61} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={62} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={63} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={64} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={65} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={66} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={67} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={68} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={69} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={71} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right7">
                            <ul>
                                <li><i data-id={72} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={73} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={74} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={75} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={76} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={77} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={78} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={79} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={80} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={81} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={82} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={83} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right8">
                            <ul>
                                <li><i data-id={84} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={85} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={86} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={87} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={88} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={89} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={90} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={91} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={92} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={93} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={94} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={95} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right9">
                            <ul>
                                <li><i data-id={96} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={97} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={98} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={99} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={100} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={101} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={102} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={103} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={104} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={105} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={106} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={107} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right10">
                            <ul>
                                <li><i data-id={108} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={109} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={111} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={112} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={113} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={114} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={115} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={116} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={117} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={118} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={119} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={120} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right11">
                            <ul>
                                <li><i data-id={121} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={122} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={123} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={124} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={125} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={126} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={127} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={128} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i  data-id={129} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={130} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={131} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={132} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right12">
                            <ul>
                                <li><i data-id={133} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={134} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={135} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={136} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={137} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={138} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={139} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={140} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={141} className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={142} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={143} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                        <div  onClick={this.onClick} className="main-right13">
                            <ul>
                                <li><i data-id={144} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={145} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={146} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={147} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={148} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={149}  className='iconfont icon-xuanzuoweixuan-chushou'></i></li>
                                <li><i data-id={150} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={151} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={152} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={153} className='iconfont icon-zuowei_kexuan'></i></li>
                                <li><i data-id={154} className='iconfont icon-zuowei_kexuan'></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    ref={tab=>this.tab=tab}
                    className="main-choose ">
                    <div className="choose-message">
                        <p className="p">购票成功后将发送取票码到</p>
                        <p className="p2">票价 <span
                            className="i">17.8 元</span></p>
                        <p className="tel">18832018548 <i className="iconfont icon-shuxie"></i></p>
                    </div>
                    <div className="p3">
                        <Link to={{pathname:`/payment`,state:this.props.location.state}}>确认选座</Link>
                    </div>
                </div>
            </div>
        )
    }
}
