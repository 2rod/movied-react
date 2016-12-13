import React, { Component } from 'react';

class MovieListItem extends Component {
  render () {
    const movie = this.props.movie
    return (
      <div className="movie-item">
        <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
        <button className="seen-movie" onClick={this.props.onSeen() => this.onClickHandler(movie.id)}>
          {movie.seen ? ':D' : 'seen'}
        </button>
      </div>
    )
  }
}

export default MovieListItem;
