import * as types from '../action-types';
import {getHotMovie, getSliders} from "../../api/home-hot";

let actions = {
  fetchSliders(){//用中间件thunk处理的写法，有两个参数，dispatch和getState，它可以将函数编译成拥有type的对象，所携带的值通过payload传递
    return function (dispatch,getState) {
      dispatch({
        type:types.FETCH_SLIDERS_SUCCESS,
        payload:getSliders()//获取轮播图的数据，通过中间件派发给reducers
      })
    }
  },
  fetchHotMovie(){
    return function (dispatch,getState) {
      dispatch({
        type:types.FETCH_HOTMOVIE,
        payload:getHotMovie()
      })
    }
  }
};

export default actions;
