var React = require('react');
var ReactDOM = require('react-dom');

var JoinSpeaker = React.createClass({

  start() {
    var speakerName = ReactDOM.findDOMNode(this.refs.name).value;
    var speakerTitle = ReactDOM.findDOMNode(this.refs.title).value;
    this.props.emit('start', { name: speakerName, title: speakerTitle });
  },

  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.start}>
        <label>Full Name
        </label>
        <input ref="name" className="form-control" placeholder="Enter Your Name.." required/>

        <label>Presentation Title
        </label>
        <input ref="title" className="form-control" placeholder="enter a title for the presentation" required/>
        <button className="btn btn-primary join-btn">Join</button>
      </form>
    );
  }

});

module.exports = JoinSpeaker;
