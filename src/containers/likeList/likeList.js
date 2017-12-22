/**
 * Created by Administrator on 2017/12/22.
 */
import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/userlikes'
class LikeList extends Component {
    constructor(){
        super();
        this.state={likes:[]}
    }
    componentWillMount(){
        this.props.userLikes();
        console.log( this.props.list.likes);
        let likes = [];
        if(this.props.list.likes){
           likes= this.props.list.likes
        }else{
            this.props.list.likes = likes
        }

    }
    render() {
        return (
            <div>
                {
                    this.props.list.likes.map((item,index)=>(
                        <div key={item.id} className="WillFilm">
                            <div className="WillFilm-content">
                                <img src={item.img}/>
                                <Link to={{pathname:`/detail/${item.id}`,state:item}} className="rightContent">
                                    <h5>{item.title}</h5>
                                    <p><span>{item.like}</span>人想看</p>
                                    <span>{item.director}</span><br/>
                                    <span>{item.starring}</span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default connect(
    state=>state.userlikes,
    actions
)(LikeList)