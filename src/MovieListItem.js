import React, { Component } from 'react';

class MovieListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      seen: false
    };
  }

  onSeen() {
    this.props.onSeen(this.props.movie.id);
  }

  render () {
    const {movie} = this.props;
    // console.log('movie in item:', movie);
    return (
      <div className="movie-item">
        <img className={movie.seen ? "poster-seen " : ""} src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
        <button
          className={movie.seen ? "seen-movie" : "unseen-movie"}
          onClick={this.onSeen.bind(this)}
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
