import React from 'react'
import Display from './parts/Display'
import Join from './parts/Join'
import Ask from './parts/Ask'
import ShowLinks from './parts/ShowLinks'


var Audience = React.createClass({
  render() {
    return (
      <Display if={this.props.status === 'connected'}>

          <Display if={this.props.member.name}>
              <Display if={!this.props.currentQuestion}>
                <h2>Welcome {this.props.member.name}</h2>
                <p>{this.props.audience.length} audience members</p>
                <p>Questions Will Appear Here.</p>
              </Display>
  
              <Display if={this.props.currentQuestion}>
                <Ask question={this.props.currentQuestion}  emit={this.props.emit}  />
              </Display>
              
              <Display if={this.props.websiteLinks}>
                <ShowLinks sites={this.props.websiteLinks} emit={this.props.emit} />
              </Display>
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
