import axios from "axios";

const initialState = {
  campusList: []
};

const SET_CAMPUSES = "SET_CAMPUSES";

const setCampuses = campusList => {
  return {
    type: SET_CAMPUSES,
    campusList
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

export const campusReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_CAMPUSES:
      newState.campusList = action.campusList;
      break;
    default:
      return state;
  }
  return newState;
};
