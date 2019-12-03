import { HIDE_ERROR } from "../constants/commonConstants";

export const createHttpAction = action => {
  const createHttpActionTemplate = {
    type: "",
    payload: "",
    query: "",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: {}
  };

  return { HTTP_ACTION: { ...createHttpActionTemplate, ...action } };
};

export const hideErrorMessage = () => ({
  type: HIDE_ERROR
});
