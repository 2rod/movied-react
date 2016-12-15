import React, { Component } from 'react';

class MovieListItem extends Component {


  onSeen() {
    // localStorage.setItem(this.props.movie.id, this.props.movie.id)
    this.props.onSeen(this.props.movie.id);
  }

  render () {
    const {movie} = this.props;
    const {onSeen} = this.props;
    return (
      <div className="movie-item">
        <img className={movie.seen ? "movie poster-seen " : "movie"} src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
        <button
          className={movie.seen ? "movie seen-movie" : "movie unseen-movie"}
          onClick={this.onSeen.bind(this, movie.id)}
          >
          seen
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
