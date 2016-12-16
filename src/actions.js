// import React, { Component } from 'react';
// import {fetchMovies, parseMovies} from './movied_api';
// import {dataService} from './api_service';
export const ADD_MOVIES = 'addMovies';

export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
})

export const seen = (id) => ({
  type: 'SEEN_MOVIE',
  id
})

export const getMovies = (route) => ({
  type: 'GET_MOVIES',
  route
})


// const handleSeen = (dispatch) => (movieId)  => {
//   // const movie = this.props.movies[movieId];
//   // const newMovie = { ...movie };
//   // newMovie.seen = true;
//   // const movies = this.props.movies;
//   // movies[movieId] = newMovie;
//   dispatch(seen(movieId));
// };
