var React = require('react');
var Display = require('./parts/Display');
var Join = require('./parts/Join')


var Audience = React.createClass({
  render() {
    return (
      <Display if={this.props.status === 'connected'}>

          <Display if={this.props.member.name}>
            <h2>Welcome {this.props.member.name}</h2>
            <p>{this.props.audience.length} audience members</p>
          <p>Questions Will Appear Here.</p>
          </Display>

          <Display if={!this.props.member.name}>
              <h1>Join the Session</h1>
              <Join emit={this.props.emit}  />
          </Display>

      </Display>
    );
  }

});

module.exports = Audience;
