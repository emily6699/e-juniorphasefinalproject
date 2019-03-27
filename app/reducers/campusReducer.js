/* eslint-disable quotes */

const initialState = {
  list: [],
  campus: {
    students: []
  },
  error: false,
  isLoading: false
};

export const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CAMPUSES":
      return {
        ...state,
        list: action.campuses,
        error: false,
        isLoading: false
      };
    case "SET_CAMPUS":
      console.log("setting campus");
      return {
        ...state,
        campus: action.campus,
        error: false,
        isLoading: false
      };
    case "REMOVE_CAMPUS":
      const campuses = state.list.filter(campus => campus.id !== action.id);
      return { ...state, list: campuses, error: false, isLoading: false };
    case "CAMPUS_ERROR":
      return { ...state, error: true, isLoading: false };
    case "LOADING_CAMPUS":
      return { ...state, error: false, isLoading: true };
    default:
      return state;
  }
};
