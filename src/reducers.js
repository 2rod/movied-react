import { combineReducers } from 'redux';

const movies = (state = {}, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case 'ADD_MOVIES':
      return ({ ...state, ...action.movies });
    case 'SEEN':
      // return state.map((movie) => {
      //   if (movie.id === action.id) {
      //     movie.seen = !movie.seen;
      //   }
      //   return movie;
      // })
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  movies
});

export default reducers;
