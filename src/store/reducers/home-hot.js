import * as types from '../action-types';//引入行为

let initState = {
  type: '',
  sliders: {
    list: []
  },
  hotMovies: {
    hasMore: true,
    list: [],
    limit: 5,
    showing: 0,
    offset: 0
  }
};

export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_SLIDERS_SUCCESS:
      return {
        ...state,
        sliders: {
          list: action.payload
        }
      };
    case types.FETCH_HOTMOVIE:
      return {
        ...state,
        hotMovies: {
          ...state.hotMovies,
          list: [...state.hotMovies.list, ...action.payload.list],
          offset: state.hotMovies.offset + action.payload.list.length,
          hasMore: action.payload.hasMore
        }

      };
    case types.REFETCH_HOTMOVIE:
      return {
        ...state,
        hotMovies: {
          ...state.hotMovies,
          offset: 5,
          hasMore: true,
          list: [...action.payload.list],
        }
      };
    default:
      return state
  }
}