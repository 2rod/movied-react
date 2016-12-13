import React, { Component } from 'react';

class MovieListItem extends Component {

  state ={
    seen: false
  }

  render () {
    const {movie, seen} = this.props;
    // console.log('movie in item:', movie);
    return (
      <div className="movie-item">
        <img className={this.state.seen ? "poster-seen " : ""} src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
        <button
          className={this.state.seen ? "seen-movie" : "unseen-movie"}
          onClick={() => this.setState({
            seen: true
          })}
          >
          {this.props.movie.seen ? ':D' : 'seen'}
        </button>
      </div>
    )

  }



}

// onClickHandler (movieId) {
//   const movies = this.state.movies.map(movie => {
//     if(movie.id === movieId) {
//       movie.seen = true;
//     }
//     return movie;
//   })
//   this.setState({
//     movies
//   });
//   return true;
// }


export default MovieListItem;
