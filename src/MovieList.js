import React, { Component } from 'react';
import MovieListItem from './MovieListItem';
import './MovieList.css';

class MovieList extends Component {

  handleSeen(movieId) {
    const movie = this.props.movies[movieId];
    const newMovie = { ...movie };
    newMovie.seen = true;
    const movies = this.props.movies;
    movies[movieId] = newMovie;
    this.setState({ movies });
  }


  render () {
    return (
        <div className="movie-list">
            {
              Object.keys(this.props.movies).map(movieId =>
                <MovieListItem
                  key={ movieId }
                  movie={ this.props.movies[movieId] }
                  onSeen={ this.handleSeen.bind(this) }
                />
              )
            }
        </div>
    );
  }

}

export default MovieList;
