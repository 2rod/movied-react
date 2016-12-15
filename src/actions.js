import React, { Component } from 'react';

export const ADD_MOVIES = 'addMovies';

export const seen = (id) => ({
  type: 'SEEN',
  id,
})

const addMovies = (movies) => ({
  type: ADD_MOVIES,
  movies
})

export const fetchMovies = () => {
  return (dispatch) => {
    console.log('in da testThunk');
    fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then((movies) => {
        console.log('in da fetch', movies);
        return parseMovies(movies);
      })
      .then((movies) => dispatch(addMovies(movies)))
  }
}

const parseMovies = (moviesArray) => {
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
