import * as types from '../action-types';
const initState = {
    willHead:{
        loading:false,
        list:[]
    },
    willSome:{
        loading:false,
        hasMore:true,
        offset:0,
        limit:5,
        list:[]
    }
};
export default function (state = initState, action) {
    switch (action.type){
        case types.FETCH_WILL:
            return {
                ...state,
                willHead:{
                    ...state.willHead,
                    loading:true
                }
            };
        case types.FETCH_WILL_SUCCESS:
            return {
                ...state,
                willHead:{
                    loading:true,
                    list:action.payload.list.sort((a,b)=>{
                        return parseInt(a.releaseTime.replace(/[^0-9]/g,''))-parseInt(b.releaseTime.replace(/[^0-9]/g,''))
                    })
                }
            };
        case types.FETCH_SOME:
            return {
                ...state,
                willSome:{
                    ...state.willSome,
                    loading:true
                }
            };
        case types.FETCH_SOME_SUCCESS:
            return {
                ...state,
                willSome:{
                    ...state.willSome,
                    loading:false,
                    hasMore:action.payload.hasMore,
                    offset:state.willSome.offset+action.payload.list.length,
                    list:[...state.willSome.list,...action.payload.list]
                }
            };
        default:
            return state;
    }
}