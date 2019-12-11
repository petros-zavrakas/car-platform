import { HTTP_ACTION } from "../constants/commonConstants";
import httpService from "../../services/httpService";

const httpMiddleware = store => next => async action => {
  if (action[HTTP_ACTION]) {
    const originalAction = action[HTTP_ACTION];

    next({
      type: originalAction.type + "_REQUESTED"
    });

    try {
      // Arguments to pass to the http methods
      // GET args: query
      // POST args: headers, body (body includes the query and the query variables)
      const args =
        originalAction.method === "GET"
          ? [originalAction.query]
          : [originalAction.headers, originalAction.body];

      const { data } = await httpService[originalAction.method](...args);

      next({
        type: originalAction.type + "_SUCCESS",
        payload: data.data,
        originalPayload: originalAction.payload || null
      });
    } catch (error) {
      next({
        type: originalAction.type + "_FAILED",
        originalType: originalAction.type,
        errorMessage: originalAction.errorMessage,
        error: error
      });
    }
  } else {
    return next(action);
  }
};

export { httpMiddleware };
