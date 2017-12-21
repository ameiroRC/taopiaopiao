import './index.less';
import React,{Component} from 'react';
import {post} from '../../../../api/index';
import {Link} from 'react-router-dom';
import $ from 'jquery';
export default class WillFilm extends Component{
    constructor(){
        super();
        this.state = {isWanted:false};
    }
    wanted=(e)=>{
        let id = +e.target.dataset.id;
        //post('/api/wanted',{id});
        let $ele = $(e.target).parent().children('p').children('span');
        this.setState({isWanted:!this.state.isWanted},()=>{
            if(this.state.isWanted){
                $ele.html(+$ele.html()+1);
            }else{
                $ele.html(+$ele.html()-1);
            }
        });
    };
    render(){
        return (
            <div>
                {
                    this.props.willSome.map((item,index)=>(
                        <div key={item.id} className="WillFilm">
                            <div className="WillFilm-content">
                                <img src={item.img}/>
                                <div className="rightContent">
                                    <h5>{item.title}</h5>
                                    <p><span>{item.like}</span>人想看</p>
                                    <span>{item.director}</span><br/>
                                    <span>{item.starring}</span>
                                    {
                                        index>4?<a src="javascript:void(0)" data-id={item.id} className="WillFilm-want" onClick={this.wanted}>想看</a>:<a href="###">预售</a>
                                    }
                                </div>
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