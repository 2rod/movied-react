import React, { Component } from 'react';
import MovieListItem from './MovieListItem';
import './MovieList.css';

class MovieList extends Component {

  constructor () {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount () {
    fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then((movies) => {
        this.setState({movies});
      }
    );
  }

  render () {
    return (
        <div className="movie-list">
            {this.state.movies.map((movie) => (
              <MovieListItem
                key={movie.id}
                movie={movie}
                onSeen={() => this.onClickHandler}
                ></MovieListItem>
            ))}
        </div>
    );
  }

  getMovieIndex (movieId) {
    return this.state.movies.find(object => object.id === movieId );
  }

  onClickHandler (movieId) {
      const movies = this.state.movies.map(movie => {
        if(movie.id === movieId) {
          movie.seen = true
        }

        return movie;
      })
      this.setState({
        movies
      });
  }

}

export default MovieList;
