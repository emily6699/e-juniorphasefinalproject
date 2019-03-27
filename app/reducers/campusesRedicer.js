const initialState = {
  campuses: []
};

const SET_CAMPUSES = "SET_CAMPUSES";

const setCampuses = campuses => {
  return {
    type: SET_CAMPUSES,
    campuses
  };
};

export const getCampuses = () => async dispatch => {
  try {
    const { data: campuses } = axios.get("/api/campuses");
    dispatch(setCampuses(campuses));
  } catch (error) {
    console.error(error);
  }
};

export const campusReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_CAMPUSES:
      newState.campuses = action.campuses;
      break;
    default:
      return state;
  }
  return newState;
};
