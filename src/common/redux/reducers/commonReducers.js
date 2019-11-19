import { HIDE_ERROR } from "../constants/commonConstants";

const isFetching = (state = false, action) => {
  if (action.type.includes("_REQUESTED")) return true;
  if (action.type.includes("_FAILED") || action.type.includes("_SUCCESS"))
    return false;

  return state;
};

const errorMessage = (state = null, action) => {
  if (action.type.includes("_FAILED")) return action.message;
  if (
    action.type.includes("_REQUESTED") ||
    action.type.includes("_SUCCESS") ||
    action.type === HIDE_ERROR
  )
    return null;

  return state;
};

export { isFetching, errorMessage };
