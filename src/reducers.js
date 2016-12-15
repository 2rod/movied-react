import { combineReducers } from 'redux';

const movies = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return ({ ...state, ...action.movies });
    case 'SEEN_MOVIE':
      const newState = { ...state }
      newState[action.id] = Object.assign({}, newState[action.id], {
        seen: true
      });
      return newState;
    default:
      return state;
  }
}

const reducers = combineReducers({
  movies
});

export default reducers;
