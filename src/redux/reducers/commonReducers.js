import { HIDE_ERRORS } from "../constants/commonConstants";

const isFetching = (state = false, action) => {
  if (action.type.includes("_REQUESTED")) return true;
  if (action.type.includes("_FAILED") || action.type.includes("_SUCCESS"))
    return false;

  return state;
};

const errorsReducer = (state = [], action) => {
  if (action.type.includes("_FAILED")) {
    const errorExists = state.filter(
      error => error.type === action.originalType
    );
    if (errorExists.length > 0) return state;

    return [
      ...state,
      { type: action.originalType, message: action.errorMessage }
    ];
  }

  if (action.type.includes("_SUCCESS"))
    return state.filter(error => error.type !== action.originalType);

  if (action.type === HIDE_ERRORS) return [];

  return state;
};

export { isFetching, errorsReducer };
