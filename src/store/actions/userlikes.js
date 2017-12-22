/**
 * Created by Administrator on 2017/12/22.
 */
import * as types from '../action-types';
import {userLikes} from '../../api/userlikes';
export default {
    userLikes(){
        return function (dispatch, getState) {
            dispatch({
                type:types.USERLIKES
            });
            dispatch({
                type:types.USERLIKES_SUCCESS,
                payload:userLikes()
            })
        }
    }
}