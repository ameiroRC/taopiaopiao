import React, {Component} from 'react';
import './index.less';
import RankItems from "./RankItems/index";
import {connect} from 'react-redux';
import actions from '../../../store/actions/homeRank';

class Rank extends Component {
    componentWillMount(){
        this.props.getRank();
    }
    render() {
        return (
            <div className="RankWrap">
                <div className="RankItems">
                    <RankItems title="今日票房榜" list={this.props.list.ticketList}/>
                    <RankItems title="口碑榜" list={this.props.list.gradeList}/>
                    <RankItems title="最受期待表" list={this.props.list.expectList}/>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.homeRank,
    actions
)(Rank)