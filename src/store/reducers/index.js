import {combineReducers} from 'redux';//这个方法用来合并reducer
import session from './session';
import {routerReducer} from 'react-router-redux';
let reducers = combineReducers({

    session,
    router:routerReducer
});
export default reducers;
