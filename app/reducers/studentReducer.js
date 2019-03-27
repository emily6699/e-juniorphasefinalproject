/* eslint-disable quotes */
const initialState = {
  list: [],
  student: {},
  error: false,
  isLoading: false
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STUDENTS":
      return {
        ...state,
        list: action.students,
        error: false,
        isLoading: false
      };
    case "SET_STUDENT":
      return {
        ...state,
        student: action.student,
        error: false,
        isLoading: false
      };
    case "REMOVE_STUDENT":
      const students = state.list.filter(student => student.id !== action.id);
      return { ...state, list: students, error: false, isLoading: false };
    case "STUDENT_ERROR":
      return { ...state, error: true, isLoading: false };
    case "LOADING_STUDENT":
      console.log("loading student");
      return { ...state, error: false, isLoading: true };
    default:
      return state;
  }
};
