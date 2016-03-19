var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


var App = require('./components/App');

var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Audience} />
    <Route name="speaker" path="speaker" handler={Speaker}></Route>
    <Route name="board" path="board" handler={Board}></Route>
  </Route>
);

Router.run(routes, function(Handler) {
    ReactDom.render(<Handler />, document.getElementById('app'));
});
