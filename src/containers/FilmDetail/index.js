import React,{Component} from 'react';
import DetailTab from "./DetailTab/index";
import './comm.less'
import DetailHeader from "./DetailHeader/index";
import DetailContent from "./DetailContent/index";
import DetailList from "./DetailList/index";
import DetailAdvertisement from "./DetailAdvertisement/index";
import DetailComment from "./DetailComment/index";
import Comment from "./Comment/index";
export default class MoveDetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let moveItem = this.props.location.state;
        let history =this.props.history;
        return (
            <div>
                <DetailTab history={history}/>
                <DetailHeader moveItem={moveItem}/>
                <DetailContent moveItem={moveItem}/>
                <DetailList/>
                <DetailAdvertisement/>
                <DetailComment moveItem={moveItem}/>
                <Comment moveItem={moveItem}/>
            </div>
        )
    }
}
