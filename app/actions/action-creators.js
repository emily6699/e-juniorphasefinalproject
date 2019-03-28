import axios from "axios";

// Campus Constants
export const SET_CAMPUSES = "SET_CAMPUSES";
export const GET_CAMPUSES = "GET_CAMPUSES";

export const SET_CAMPUS = "SET_CAMPUS";
export const GET_CAMPUS = "GET_CAMPUS";

export const UPDATE_CAMPUS = "UPDATE_CAMPUS";

export const DELETE_CAMPUS = "DELETE_CAMPUS";
export const REMOVE_CAMPUS = "REMOVE_CAMPUS";

export const CAMPUS_ERROR = "CAMPUS_ERROR";

export const LOADING_CAMPUS = "LOADING_CAMPUS";

// Student Constants
export const SET_STUDENTS = "SET_STUDENTS";
export const GET_STUDENTS = "GET_STUDENTS";

export const SET_STUDENT = "SET_STUDENT";
export const GET_STUDENT = "GET_STUDENT";

export const DELETE_STUDENT = "DELETE_STUDENT";
export const REMOVE_STUDENT = "REMOVE_STUDENT";

export const STUDENT_ERROR = "STUDENT_ERROR";

export const LOADING_STUDENT = "LOADING_STUDENT";

// Campuses Action Creators
export const loadingCampus = () => ({
  type: LOADING_CAMPUS
});

export const setCampuses = campuses => ({
  type: SET_CAMPUSES,
  campuses
});

export const setCampus = campus => ({
  type: SET_CAMPUS,
  campus
});

export const getCampuses = () => {
  return async dispatch => {
    dispatch(loadingCampus());
    const { data } = await axios.get("/api/campuses");
    dispatch(setCampuses(data));
  };
};

export const getCampus = id => {
  return async dispatch => {
    dispatch(loadingCampus());
    const { data } = await axios.get(`/api/campuses/${id}`);
    if (data) return dispatch(setCampus(data));
    if (!data) return dispatch(campusError());
  };
};

export const removeCampus = id => ({
  type: REMOVE_CAMPUS,
  id
});

export const campusError = () => ({
  type: CAMPUS_ERROR
});

export const deleteCampus = id => {
  console.log("inthunklkkkkk", id);
  return async dispatch => {
    const { data } = await axios.delete(`/api/campuses/${id}`);
    dispatch(removeCampus(id));
  };
};

export const updateCampus = (campus, newData) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/campuses/${campus.id}`, newData);
    data.students = campus.students;
    if (data) return dispatch(setCampus(data));
    if (!data) return dispatch(campusError());
  };
};

// Student Action Creators
export const loadingStudent = () => ({
  type: LOADING_STUDENT
});

export const setStudents = students => ({
  type: SET_STUDENTS,
  students
});

export const getStudents = () => {
  return async dispatch => {
    dispatch(loadingStudent());
    const { data } = await axios.get("/api/students");
    dispatch(setStudents(data));
  };
};

export const setStudent = student => ({
  type: SET_STUDENT,
  student
});

export const studentError = () => ({
  type: STUDENT_ERROR
});

export const getStudent = id => {
  return async dispatch => {
    dispatch(loadingStudent());
    const { data } = await axios.get(`/api/students/${id}`);
    if (data) return dispatch(setStudent(data));
    if (!data) return dispatch(studentError());
  };
};

export const removeStudent = id => ({
  type: REMOVE_STUDENT,
  id
});

export const deleteStudent = id => {
  return async dispatch => {
    const { data } = await axios.delete(`/api/students/${id}`);
    return dispatch(removeStudent(id));
  };
};

export const updateStudent = (student, newData) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/students/${student.id}`, newData);
    data.campus = student.campus;
    if (data) return dispatch(setStudent(data));
    if (!data) return dispatch(studentError());
  };
};
