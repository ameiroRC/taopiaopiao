import './index.less';
import React,{Component} from 'react';
import {get} from '../../../../api/index';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {connect} from 'react-redux';
import actions from '../../../../store/actions/session';
class WillFilm extends Component{
    constructor(){
        super();
        this.state = {isWanted:false};
    }
    componentDidMount(){
        this.props.validate();
    }
    wanted=(e,id)=>{
        e.stopPropagation();
        get(`/api/like?id=${id}`);
        let $ele = $(e.target).prev().children('p').children('span');
        if(!this.state.isWanted){
            $ele.html(+$ele.html()+1);
            $(e.target).css({color:'black'}).html('已想看');
        }else{
            $ele.html(+$ele.html()-1);
            $(e.target).css({color:'white'}).html('想看');
        }
        this.setState({isWanted:!this.state.isWanted});
    };
    render(){//想按钮看需要判断是否登录，登录了点击向后台发送，like字段加一，并且字体颜色改变，未登录跳到登录页
        return (
            <div>
                {
                    this.props.willSome.map((item,index)=>(
                        <div key={item.id} className="WillFilm">
                            <div className="WillFilm-content">
                                <img src={item.img}/>
                                <Link to={{pathname:`/detail/${item.id}`,state:item}} className="rightContent">
                                    <h5>{item.title}</h5>
                                    <p><span>{item.like}</span>人想看</p>
                                    <span>{item.director}</span><br/>
                                    <span>{item.starring}</span>
                                </Link>
                                {
                                    index>4?this.props.user?<a src="javascript:void(0)" data-id={item.id} className="WillFilm-btn WillFilm-want" onClick={(e)=>this.wanted(e,item.id)}>想看</a>:<Link to='/login' className="WillFilm-btn WillFilm-want">想看</Link>:<Link to={{pathname:'/cinemaId',state:item}} href="javascript:void(0)" className="WillFilm-btn">预售</Link>
                                }
                            </div>
                        </div>
                    ))
                }
                <div className="WillFilm-loading">
                    {
                        this.props.hasMore?<div><img src={require('./1.gif')} alt=""/></div>:<div>没有更多啦！<span>_(:з」∠)_</span></div>
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(WillFilm)
/*index>4?this.props.user?<a src="javascript:void(0)" data-id={item.id} className="WillFilm-btn WillFilm-want" onClick={this.wanted}>想看</a>:<Link to='/login' className="WillFilm-btn WillFilm-want">想看</Link>:<a href="javascript:void(0)" className="WillFilm-btn">预售</a>*/