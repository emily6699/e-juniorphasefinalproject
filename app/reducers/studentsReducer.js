import axios from "axios";

const initialState = {
  studentList: []
};

const SET_STUDENTS = "SET_CAMPUSES";

const setStudents = studentList => {
  return {
    type: SET_STUDENTS,
    studentList
  };
};

export const getStudents = () => async dispatch => {
  try {
    const { data: students } = await axios.get("/api/students");
    dispatch(setStudents(students));
  } catch (error) {
    console.error(error);
  }
};

export const campusReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_STUDENTS:
      newState.studentList = action.studentList;
      break;
    default:
      return state;
  }
  return newState;
};
