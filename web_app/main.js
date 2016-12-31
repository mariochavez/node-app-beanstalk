'use strict';

import ReactDOM from 'react-dom';
import React from 'react';

import WelcomeContainer from './components/welcome';
import SecondContainer from './components/second';

import App from './App';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((<Router history={browserHistory}>
<Route path="/" component={App}>
  <IndexRoute components={{content: WelcomeContainer}}/>
  <Route path="/welcome" components={{content: WelcomeContainer}} />
  <Route path="/second" components={{content: SecondContainer}} />
</Route>
</Router>), document.getElementById('content'));
