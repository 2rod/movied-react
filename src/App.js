import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';

// import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import {seen} from './actions';
import {fetchMovies} from './movied_api';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {/*amber800,*/black,grey100/*,grey900*/} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CC7B19',
    textColor: grey100,
  },
  appBar: {
    color: black,
  },
});


class App extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }


  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar title="Movied"/>
          <div style={{padding:24}}>
            <MovieList
              movies={this.props.movies}
              handleSeen={this.props.handleSeen.bind(this)}
              ></MovieList>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
  handleSeen: (id) => dispatch(seen(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
