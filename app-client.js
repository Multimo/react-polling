import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import Audience from './components/Audience'
import Speaker from './components/Speaker'
import Board from './components/Board'
import Whoops404 from './components/Whoops404'

import { Router, Route, Link, IndexRoute, NotFoundRoute, browserHistory, hashHistory } from 'react-router'





ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>

        <IndexRoute component={Audience}/>
        <Route path="/speaker" component={Speaker}/>
        <Route path="/board" component={Board}/>
        <Route path="*" component={Whoops404} />

       </Route>
  </Router>
  ), document.getElementById('app'))


// ReactDom.render(<App /> , app);
