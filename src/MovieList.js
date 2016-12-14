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

  handleSeen(movieId) {
    const movie = this.state.movies[movieId];
    const newMovie = { ...movie };
    newMovie.seen = true;

    const movies = this.state.movies;
    movies[movieId] = newMovie;

    this.setState({ movies });
  }


  render () {
    return (
        <div className="movie-list">
            {
              Object.keys(this.state.movies).map(movieId =>
                <MovieListItem
                  key={ movieId }
                  movie={ this.state.movies[movieId] }
                  onSeen={ this.handleSeen.bind(this) }
                />
              )
            }
        </div>
    );
  }

  parseMovies(moviesArray) {
    let moviesObj = {};
    moviesArray.forEach((movie) => {
      moviesObj[movie.id] = {
        seen: false,
        poster_path: movie.poster_path,
        id: movie.id,
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
