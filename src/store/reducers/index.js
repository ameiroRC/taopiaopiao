import {combineReducers} from 'redux';//这个方法用来合并reducer
import homeRank from './homeRank';
import homeWill from './homeWill'

let reducers = combineReducers({
    homeRank,
    homeWill
});

export default reducers;