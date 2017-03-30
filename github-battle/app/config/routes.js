var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var createBrowserHistory = require('history/createBrowserHistory')

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

var routes = (
  <Router history={history}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
