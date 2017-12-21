import * as types from '../action-types';
import {getRank} from '../../api/homeRank';
export default {
    getRank(){
        return function (dispatch, getState) {
            dispatch({
                type:types.FETCH_RANK
            });
            dispatch({
                type:types.FETCH_RANK_SUCCESS,
                payload:getRank()
            })
        }
    }
}