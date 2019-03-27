import axios from "axios";

const initialState = {
  campusList: [],
  selectedCampus: {}
};

const SET_CAMPUSES = "SET_CAMPUSES";
const SELECT_CAMPUS = "SELECT_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";

const setCampuses = campusList => {
  return {
    type: SET_CAMPUSES,
    campusList
  };
};
const selectCampus = campus => {
  return {
    type: SELECT_CAMPUS,
    campus
  };
};

const addCampus = campus => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

export const getCampuses = () => async dispatch => {
  try {
    const { data: campuses } = await axios.get("/api/campuses");
    dispatch(setCampuses(campuses));
  } catch (error) {
    console.error(error);
  }
};

export const getSingleCampus = campusId => async dispatch => {
  try {
    const { data: campus } = await axios.get(`/api/campuses/${campusId}`);
    console.log(campus, "****");
    dispatch(selectCampus(campus));
  } catch (error) {
    console.error(error);
  }
};

export const createCampus = campus => async dispatch => {
  try {
    console.log("campus prior to post", campus);
    const { data } = await axios.post("/api/campuses", campus);
    console.log("data", data);
    dispatch(addCampus(data));
  } catch (error) {
    console.error(error);
  }
};

export const campusReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_CAMPUSES:
      newState.campusList = action.campusList;
      break;
    case SELECT_CAMPUS:
      newState.selectedCampus = action.campus;
      break;
    case ADD_CAMPUS:
      newState.campusList = [...newState.campusList, action.campus];
      console.log("newState", newState);
      break;
    default:
      return state;
  }
  return newState;
};
