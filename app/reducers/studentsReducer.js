/* eslint-disable quotes */
import axios from "axios";

const initialState = {
  studentList: [],
  selectedStudent: {}
};

const SET_STUDENTS = "SET_CAMPUSES";
const SELECT_STUDENT = "SELECT_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";

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

const removeStudent = studentId => {
  return {
    type: REMOVE_STUDENT,
    studentId
  };
};

const updateStudent = student => {
  return {
    type: UPDATE_STUDENT,
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

export const removeStudentThunk = studentId => async dispatch => {
  try {
    await axios.delete(`/api/students/${studentId}`);
    dispatch(removeStudent(studentId));
  } catch (error) {
    console.error(error);
  }
};

export const updateStudentThunk = student => async dispatch => {
  try {
    await axios.put(`/api/students/${student.id}`, student);
    dispatch(updateStudent(student));
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
      break;
    case REMOVE_STUDENT:
      newState.studentList = newState.studentList.filter(
        student => student.id !== action.studentId
      );
      break;
    case UPDATE_STUDENT:
      newState.studentList = newState.studentList.map(student => {
        if (student.id === action.student.id) {
          return action.student;
        } else {
          return student;
        }
      });
      newState.selectedStudent = action.student;
      console.log("newState", newState);
      break;
    default:
      return state;
  }
  return newState;
};
