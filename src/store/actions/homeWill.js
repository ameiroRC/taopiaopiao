import * as types from '../action-types';
import {getWill,getSome,getLike} from '../../api/homeWill';
export default {
    getWill(){
        return function (dispatch, getState) {
            dispatch({type:types.FETCH_WILL});
            dispatch({
                type:types.FETCH_WILL_SUCCESS,
                payload:getWill()
            })
        }
    },
    getSome(){
        return function (dispatch, getState) {
            let {homeWill:{willSome:{loading,hasMore,offset,limit}}} = getState();
            if(!loading&&hasMore){
                dispatch({type:types.FETCH_SOME});
                dispatch({
                    type:types.FETCH_SOME_SUCCESS,
                    payload:getSome(offset,limit)
                })
            }
        }
    },
    getLike(){
        return function (dispatch, getState) {

            dispatch({
                type:types.ISLIKE,
                payload:getLike()
            })
        }
    }
}