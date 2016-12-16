import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from "redux-thunk";
import { Router, Route, browserHistory } from 'react-router'
import apiMiddleware from "./api_service";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import About from './about';
import MovieDetail from './MovieDetail';
import './index.css';
// import injectTapEventPlugin from 'react-tap-event-plugin';
//
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

let store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    apiMiddleware
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/movie/:id" component={MovieDetail}/>

      </Router>
      {/* <App /> */}
    </Provider>,
    document.getElementById('root')
);
