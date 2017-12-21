import './index.less';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class RankItems extends Component {
    render() {
        return (
            <div className="RankHead">
                <div className="RankHead-title">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="RankHead-wrap">
                    <div className="RankHead-slider">
                        {
                            this.props.list.map((item,index)=>(
                                <Link to={{pathname:`/detail/${item.id}`,state:item}} key={item.id} className="RankHead-product">
                                    <div className="RankHead-tip">{index+1}</div>
                                    <img src={item.img}/>
                                    <b>{this.props.title==="最受期待表"?item.like+'人想看':''}</b>
                                    <h5>{item.title}</h5>
                                    <p>{this.props.title==='口碑榜'?<i><span>观众评分：</span>{item.grade}</i>:this.props.title==='最受期待表'?item.releaseTime:item.todayPrice+'万'}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}