import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from './actions';

const path = 'https://movied.herokuapp.com/movie/';

class MovieDetail extends Component {

  componentDidMount() {
    this.props.getMovies(path + this.props.params.id);
  }

  render () {
    const movieId = this.props.params.id;
    if (this.props.movie) {
      return (
        <div className="movie-item">
           <img className={this.props.movie.seen ? "movie poster-seen " : "movie"} src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path}/>
        </div>
      );
    }
    return (<div><h3>No Movie</h3></div>);
};

}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.params.id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMovies: (route) => dispatch(getMovies(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
