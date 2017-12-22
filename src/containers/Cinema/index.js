import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/cinema';
import CinemaItems from "./CinemaItems/index";

class Cinema extends Component {
    componentDidMount(){
        this.props.getCinema();
    }
    render() {
        return (
            <div>
                <CinemaItems cinemas={this.props.cinemas}/>
            </div>
        )
    }
}
export default connect(
    state=>state.cinemas,
    actions
)(Cinema);