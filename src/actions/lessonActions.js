import axios from "axios";

import { LESSONS_LOADING, GET_LESSONS, BACKEND_URL } from "./types";

// Lessons loading
export const setLessonsLoading = () => {
  return {
    type: LESSONS_LOADING
  };
};

// Get Reikis
export const getLessons = () => dispatch => {
  dispatch(setLessonsLoading());
  axios
    .get(BACKEND_URL + "/lessons")
    .then(res =>
      dispatch({
        type: GET_LESSONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LESSONS,
        payload: null
      })
    );
};
