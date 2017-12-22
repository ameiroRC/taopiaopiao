import {combineReducers} from 'redux';//这个方法用来合并reducer
import homeRank from './homeRank';
import homeWill from './homeWill';
import session from './session';
import homeHot from './home-hot';
import cinemas from './cinemas';
import cinemasId from './cinemasId';
import userlikes from './userlikes';

let reducers = combineReducers({
    homeRank,
    homeWill,
    session,
    homeHot,
    cinemas,
    userlikes,
    cinemasId
});

export default reducers;