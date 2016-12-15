import {addMovies} from './actions'

export const parseMovies = (moviesArray) => {
  let moviesObj = {};
  moviesArray.forEach((movie) => {
    moviesObj[movie.id] = {
      seen: false,
      poster_path: movie.poster_path,
      id: movie.id,
    };
  });
  return moviesObj;
}

export const fetchMovies = () => {
  return (dispatch) => {
    fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then((movies) => {
        return parseMovies(movies);
      })
      .then((movies) => {
        dispatch(addMovies(movies))
      })
  }
}
