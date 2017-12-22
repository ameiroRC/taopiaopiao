import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/cinemaId';
import CinemaItems from "./CinemaItems/index";

class CinemaId extends Component {
    componentDidMount(){
        let state = this.props.location.state;
        this.props.getFilmCinema(state.id);
    }
    render() {
        return (
            <div>
                <CinemaItems cinemas={this.props.cinemasId}/>
            </div>
        )
    }
}
export default connect(
    state=>state.cinemasId,
    actions
)(CinemaId);