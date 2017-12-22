import * as types from '../action-types';
let initState = {
    loadingId:false,
    cinemasId:[]
};
export default function (state = initState, action) {
    switch (action.type){
        case types.FILM_CINEMA:
            return {
                ...state,
                loadingId:true
            };
        case types.FILM_CINEMA_SUCCESS:
            return {
                loadingId:true,
                cinemasId:action.payload
            };
        default:
            return state;
    }
}