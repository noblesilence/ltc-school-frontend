import { combineReducers } from "redux";
import lessonsReducer from "./lessonsReducer";

export default combineReducers({
  lessons: lessonsReducer
});
