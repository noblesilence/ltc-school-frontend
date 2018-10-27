import axios from "axios";
import auth0Client from "../Auth";

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
    .get(BACKEND_URL + "/lessons", {
      headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
    })
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
