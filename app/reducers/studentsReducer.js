const initialState = {
  students: []
};

const SET_STUDENTS = "SET_CAMPUSES";

const setStudents = students => {
  return {
    type: SET_STUDENTS,
    students
  };
};

export const getStudents = () => async dispatch => {
  try {
    const { data: students } = axios.get("/api/students");
    dispatch(setStudents(students));
  } catch (error) {
    console.error(error);
  }
};

export const campusReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_STUDENTS:
      newState.students = action.students;
      break;
    default:
      return state;
  }
  return newState;
};
