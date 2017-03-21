import {GET_ORIGIN_PAGE_INFO} from '../actions/OriginalAction';
import {successActionType, failedActionType, notFoundActionType} from '../middleware/promiseMiddleware';

const initialState = {
  originalInfo: {}
};

const OriginalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case successActionType(GET_ORIGIN_PAGE_INFO):
      return {...state, originalInfo: action.res};
    case failedActionType(GET_ORIGIN_PAGE_INFO):
      return {error: action.error};
    case notFoundActionType(GET_ORIGIN_PAGE_INFO):
      return initialState;
    default:
      return state;
  }
};

export default OriginalReducer;