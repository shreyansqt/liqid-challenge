import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  persistedState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
    ),
  ),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
