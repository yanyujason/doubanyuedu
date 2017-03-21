import { combineReducers } from "redux";

import originalReducer from './OriginalReducer';
import appReducer from './AppReducer';

const rootReducer = combineReducers({
  originalInfo: originalReducer,
  appReducer
});

export default rootReducer;