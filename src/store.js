import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// import the root reducer
import rootReducer from './reducers/index';

import questions from './data/questions';

// create an object for default data
const initialState = {
  questions,
};

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
    ),
  ),
);

export default store;
