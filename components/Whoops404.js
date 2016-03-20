var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Whoops404 = React.createClass({
  render() {
    return (
      <div id="not-found">
        <h1>Whoops....</h1>
        <p>Page Not found.
        Were you looking for one of these:</p>

      <Link to="/">Join As Audience</Link>
      <Link to="/speaker">Join As Speaker</Link>
      <Link to="/board">View the Board</Link>
      
      </div>
    );
  }
});


module.exports = Whoops404;
