import React, {Component} from 'react';
import WillSlider from "./WillSlider/index";
import WillFilm from "./WillFilm/index";
import './index.less';
import WillHead from "./WillHead/index";
import WillTime from "./WillTime/index";
import {connect} from 'react-redux';
import actions from '../../../store/actions/homeWill';
import {upLoadMore} from '../../../utils';
class Will extends Component {
    componentDidMount(){
        this.props.getWill();
        this.props.getSome();
        upLoadMore(this.content,this.props.getSome);
    }
    render() {
        return (
            <div ref={i=>this.content=i} className="Will">
                <div className="WillContent">
                    <WillTime/>
                    <WillHead willHead={this.props.willHead}/>
                    <WillSlider/>
                    <WillFilm hasMore={this.props.willSome.hasMore} willSome={this.props.willSome.list}/>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.homeWill,
    actions
)(Will)