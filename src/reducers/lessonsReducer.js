import { LESSONS_LOADING, GET_LESSONS } from "../actions/types";

const initialState = {
  lessons: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LESSONS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
