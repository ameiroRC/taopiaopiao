import * as types from '../action-types';//引入行为

let initState = {
  type: '',
  sliders: {
    list: []
  },
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
    default:
      return state
  }
}