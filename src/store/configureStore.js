import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { httpMiddleware } from "../common/redux/middlewares/commonMiddlewares";
import rootReducer from "../reducers/rootReducer";

export const configureStore = preloadedState => {
  const middlewares = [httpMiddleware];

  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const storeEnhancer = [middlewaresEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
