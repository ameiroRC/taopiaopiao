import React,{Component} from 'react';
import CinemaHeader from "./CinemaHeader";
import './index.less'
import CinemaContent from "./CinemaContent/index";
import Period from "./Period/index";
import {getAll} from '../../api/gitAllMovei'
import Tab from "../../containers/CinemaDetail/DetailTab";

export default class CinemaDetail extends Component{
    constructor(){
        super();
        this.state={All:[]}
    }
    componentDidMount(){
        getAll().then(All=>this.setState({All}));

    }
    render(){
        let history = this.props.history
        return (
            <div>
                <Tab history={history}/>
                <CinemaHeader state={this.props.location.state}/>
                <CinemaContent All={this.state.All}/>
            </div>
        )
    }
}
