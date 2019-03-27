// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'

const initialState = {};

const SET_CAMPUSES = "SET_CAMPUSES";
const SET_STUDENTS = "SET_STUDENTS";

const setCampuses = campuses => ({
  type: SET_CAMPUSES,
  campuses
});

const setStudents = students => ({
  type: SET_STUDENTS,
  students
});

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
