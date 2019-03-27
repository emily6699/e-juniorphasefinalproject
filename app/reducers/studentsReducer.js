import axios from "axios";

const initialState = {
  studentList: [],
  selectedStudent: {}
};

const SET_STUDENTS = "SET_CAMPUSES";
const SELECT_STUDENT = "SELECT_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";

const setStudents = studentList => {
  return {
    type: SET_STUDENTS,
    studentList
  };
};

const selectStudent = student => {
  return {
    type: SELECT_STUDENT,
    student
  };
};

const addStudent = student => {
  console.log(student, "checking student in addStudent");
  return {
    type: ADD_STUDENT,
    student
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

export const getSingleStudent = studentId => async dispatch => {
  try {
    const { data: student } = await axios.get(`/api/students/${studentId}`);
    console.log(student, "****");
    dispatch(selectStudent(student));
  } catch (error) {
    console.error(error);
  }
};

export const createStudent = student => async dispatch => {
  try {
    console.log("student prior to post", student);
    const { data } = await axios.post("/api/students", student);
    console.log("data", data);
    dispatch(addStudent(data));
  } catch (error) {
    console.error(error);
  }
};

export const studentReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_STUDENTS:
      newState.studentList = action.studentList;
      break;
    case SELECT_STUDENT:
      newState.selectedStudent = action.student;
      break;
    case ADD_STUDENT:
      newState.studentList = [...newState.studentList, action.student];
      console.log("newState", newState);
      break;
    default:
      return state;
  }
  return newState;
};
