import * as types from '../action-types';
import {getCinema,getFilmCinema} from '../../api/cinema';
export default {
    getCinema(){
        return function (dispatch, getState) {
            dispatch({type:types.FETCH_CINEMA});
            dispatch({
                type:types.FETCH_CINEMA_SUCCESS,
                payload:getCinema()
            })
        }
    }
}