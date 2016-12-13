import React, { Component } from 'react';
import MovieListItem from './MovieListItem';
import './MovieList.css';

class MovieList extends Component {

  constructor () {
    super();
    this.state = {
      movies: {}
    };
  }

  componentDidMount () {
    fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then((movies) => {
        this.parseMovies(movies);
        // console.log('state', this.state.movies);
      }
    );
  }


  render () {
    let movieList = [];
    const {movies} = this.state;
    for (let movieId in movies) {
      if (movies.hasOwnProperty(movieId)) {
        movieList.push(
          <MovieListItem
            key={movieId}
            movie={movies[movieId]}
            // onSeen={() => this.onClickHandler(movieId)}
          ></MovieListItem>
        )
      }
    }
      // console.log('movieList: ', movieList);

    return (
        <div className="movie-list">
            {movieList}
        </div>
    );
  }

  parseMovies (moviesArray) {
    let moviesObj = {};
    moviesArray.forEach((movie) => {
      moviesObj[movie.id] = {
        seen: false,
        poster_path: movie.poster_path
      };

    });
    this.setState({
      movies: moviesObj
    });
  }

  getMovieIndex (movieId) {
    return this.state.movies.find(object => object.id === movieId );
  }


}

export default MovieList;
