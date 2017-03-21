import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/Index";
import thunk from "redux-thunk";
import promiseMiddleware from "../middleware/promiseMiddleware";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};
