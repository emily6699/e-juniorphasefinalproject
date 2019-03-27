/* eslint-disable quotes */
import axios from "axios";

const initialState = {
  campusList: [],
  selectedCampus: {}
};

const SET_CAMPUSES = "SET_CAMPUSES";
const SELECT_CAMPUS = "SELECT_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

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

const removeCampus = campusId => {
  return {
    type: REMOVE_CAMPUS,
    campusId
  };
};

const updateCampus = campus => {
  return {
    type: UPDATE_CAMPUS,
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

export const removeCampusThunk = campusId => async dispatch => {
  try {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(removeCampus(campusId));
  } catch (error) {
    console.error(error);
  }
};

export const updateCampusThunk = campus => async dispatch => {
  try {
    await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(updateCampus(campus));
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
      break;
    case REMOVE_CAMPUS:
      newState.campusList = newState.campusList.filter(
        campus => campus.id !== action.campusId
      );
      break;
    case UPDATE_CAMPUS:
      newState.campusList = newState.campusList.map(campus => {
        if (campus.id === action.campus.id) {
          return action.campus;
        } else {
          return campus;
        }
      });
      newState.selectedCampus = action.campus;
      console.log("newState", newState);
      break;

    default:
      return state;
  }
  return newState;
};
