import DoubanAPI from '../api/DoubanAPI'

export const GET_ORIGIN_PAGE_INFO = 'GET_ORIGIN_PAGE_INFO';

export const getOriginPageInfo = () => {
  return {
    type: GET_ORIGIN_PAGE_INFO,
    promise: DoubanAPI.getOriginInfo()
  };
};