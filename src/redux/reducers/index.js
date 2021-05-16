import { GET_DATA, SET_SCORE } from "../actions/types";

const initialState = {
  sentence: {
    text: null,
    number: 1,
  },
  score: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        sentence: action.payload,
      };

    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
