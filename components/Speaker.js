import React from 'react'
import Display from './parts/Display'

import JoinSpeaker from './parts/JoinSpeaker'
import Attendance from './parts/Attendance'
import Questions from './parts/Questions'
import AddLinks from './parts/AddLinks'
import ShowLinks from './parts/ShowLinks'

class Speaker extends React.Component {
  render() {
    return(
      <div>

        <Display if={this.props.status === 'connected'}>

          <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
          
            <Attendance audience={this.props.audience} />
        
            <AddLinks emit={this.props.emit} />
                
              <Display if={this.props.websiteLinks}>
                    <ShowLinks sites={this.props.websiteLinks} emit={this.props.emit}  />
              </Display>
        
          </Display>

          <Display if={!this.props.member.name}>
            <h2>Start the Presentation</h2>
            <JoinSpeaker emit={this.props.emit} />
          </Display>

        </Display>
        
        
      </div>
    );
  }
}

module.exports = Speaker;
