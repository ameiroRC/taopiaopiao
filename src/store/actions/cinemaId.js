import * as types from '../action-types';
import {getCinema,getFilmCinema} from '../../api/cinema';
export default {
    getFilmCinema(id){
        return function (dispatch, getState) {
            dispatch({type:types.FILM_CINEMA});
            dispatch({
                type:types.FILM_CINEMA_SUCCESS,
                payload:getFilmCinema(id)
            })
        }
    }
}