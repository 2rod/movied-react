import React, { Component } from 'react';

class MovieListItem extends Component {

  constructor () {
    super();
    this.state = {
      movie : null,
      seen : false,
    };
  }
}

export default MovieListItem;
