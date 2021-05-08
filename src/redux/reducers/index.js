import { GET_DATA } from "../actions/types";

const initialState = {
  students: [],
  filtered: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        students: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
