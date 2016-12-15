import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from "redux-thunk"

import App from './App';
import './index.css';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

let store = createStore(
  reducers,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
