export const successActionType = (type) => type;
export const requestActionType = (type) => `${type}_REQUEST`;
export const notFoundActionType = (type) => `${type}_NOT_FOUND`;
export const failedActionType = (type) => `${type}_FAILURE`;

export default () => (next) => (action) => {
  const {promise, type, ...rest} = action;

  if (!promise) {
    return next(action);
  }

  next({ ...rest, type: requestActionType(type) });

  return promise
    .then((res) => {
      let newType;
      if (res.notFound) {
        newType = notFoundActionType(type);
      } else {
        newType = successActionType(type);
      }

      next({ ...rest, res, type: newType });

      return true;
    })
    .catch((error) => {
      next({ ...rest, error, type: failedActionType(type) });

      return false;
    });

}