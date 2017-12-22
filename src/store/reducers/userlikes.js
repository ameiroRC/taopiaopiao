/**
 * Created by Administrator on 2017/12/22.
 */
import * as types from '../action-types';
const initState = {
    loading:false,
    list:[]
};
export default function (state = initState, action) {
    switch (action.type){
        case types.USERLIKES:
            return {
                ...state,
                loading:true
            };
        case types.USERLIKES_SUCCESS:
            return {
                ...state,
                loading:false,
                list:action.payload
            }
        default:
            return state;
    }
}