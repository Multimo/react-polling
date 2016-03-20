var React = require('react');
var ReactDOM = require('react-dom');
var Display = require('./Display');
var Link = require('react-router').Link;

var Join = React.createClass({

  join() {
    var memberName= ReactDOM.findDOMNode(this.refs.name).value;
    this.props.emit('join', { name: memberName });
  },

  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.join}>
        <label>Full Name </label>
        <input ref="name"
               className="form-control"
               placeholder="Enter Your Name.."
               required />
             <button className="btn btn-primary join-btn">Join</button>
             <Link to="/speaker">Join as Speaker</Link>
      </form>
    );
  }

});

module.exports = Join;
