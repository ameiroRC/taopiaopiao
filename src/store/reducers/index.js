import {combineReducers} from 'redux';//这个方法用来合并reducer
import homeHot from './home-hot'//状态对象

let reducers = combineReducers({
  homeHot,
});

export default reducers;