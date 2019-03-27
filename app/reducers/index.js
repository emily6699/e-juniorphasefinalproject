/* eslint-disable quotes */
// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from "redux";
import { studentReducer } from "./studentsReducer";
import { campusReducer } from "./campusesReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
});

export default rootReducer;
