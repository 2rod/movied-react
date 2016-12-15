import { combineReducers } from 'redux';

const movies = (state = {}, action) => {
  console.log('state in reducer before seen', state);
  switch (action.type) {
    case 'ADD_MOVIES':
      return ({ ...state, ...action.movies });
    case 'SEEN_MOVIE':
      state[action.id] = Object.assign({}, state[action.id], {
        seen: true
      });
      console.log('state in reducer after seen', state);
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  movies
});

export default reducers;
