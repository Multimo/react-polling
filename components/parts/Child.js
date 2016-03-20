var React = require('react');

var Child = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Child;
