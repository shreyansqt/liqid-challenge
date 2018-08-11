/* globals document */
import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';

import { App } from './components/App';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className='container'>
        <Route path='/' component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
