var React = require('react');

var Header = React.createClass({

  propTypes : {
    title: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      status: 'disconnected'
    }
  },

  render() {
    return (
      <header className="row">
        <div className="col-xs-10" >
          <h1>{this.props.title}</h1>
          <p>{this.props.speaker}</p>
        </div>
        <div className="col-xs-2 status-span">
          <span id="connection-status" className={this.props.status}></span>
        </div>
      </header>
    );
  }
});

module.exports = Header;
