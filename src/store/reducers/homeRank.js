import * as types from '../action-types';
const initState = {
    loading:false,
    list:{
        gradeList:[],
        expectList:[],
        ticketList:[]
    }
};
export default function (state = initState, action) {
    switch (action.type){
        case types.FETCH_RANK:
            return {...state,loading:true};
        case types.FETCH_RANK_SUCCESS:
            return {
                loading:false,
                list:{
                    gradeList:action.payload.sort((a,b)=>{
                        return b.grade - a.grade;
                    }).slice(0,10),
                    expectList:action.payload.sort((a,b)=>{
                        return b.like - a.like;
                    }).slice(0,10),
                    ticketList:action.payload.sort((a,b)=>{
                        return b.todayPrice - a.todayPrice;
                    }).slice(0,10)
                }
            };
        default:
            return state;
    }
}