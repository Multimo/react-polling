var React = require('react');
var ReactDom = require('react-dom');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var NotFoundRoute = require('react-router').NotFoundRoute;
// var hashHistory = require('react-router').hashHistory;

var App = require('./components/App');

var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');
var Whoops404 = require('./components/Whoops404');


ReactDom.render((
    <Router >
        <Route path="/" component={App}>
        {/* add the routes here */}

        <IndexRoute component={Audience}/>
        <Route path="/speaker" component={Speaker}/>
        <Route path="/board" component={Board}/>
        <Route path="*" component={Whoops404} />

       </Route>
  </Router>
  ), document.getElementById('app'))


// ReactDom.render(<App /> , app);
