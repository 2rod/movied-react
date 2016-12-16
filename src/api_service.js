
export const apiGenerator = (next) => (route, name) => {
  fetch(route)
    .then((response) => response.json())
    .then((data) => {
      console.log('in da apiGenerator', name);
      next({
        type: `${name}_RECEIVED`,
        data
      })
    })
    .catch((error) => {
      console.log('error in apiGenerator');
      return next({
        type: `${name}_ERROR`,
        error
      })
    })
}

export const apiMiddleware = store => next => action => {
  const getApi = apiGenerator(next)
  if (action.route) {
    console.log('action in middlew', action);
    getApi(action.route, action.type);
    return next({
      type: action.type,
      isLoading: true
    })
  }
  next(action);

}


export default apiMiddleware;
