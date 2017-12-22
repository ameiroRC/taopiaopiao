import * as types from '../action-types';
let initState = {
    loading:false,
    cinemas:[]
};
export default function (state = initState, action) {
    switch (action.type){
        case types.FETCH_CINEMA:
            return {
                ...state,
                loading:true
            };
        case types.FETCH_CINEMA_SUCCESS:
            return {
                loading:false,
                cinemas:action.payload
            };
        default:
            return state;
    }
}