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
              <div className="movie-item"> <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/><button className="seen-movie">seen</button></div>
            ))}
        </div>
    );
  }

}

export default MovieList;
