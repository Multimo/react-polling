var React = require('react');


var Display = require('./Display');

var Review = require('./Review');

var reviceCtn = React.createClass({
  
  getInitialState: function() {
    return {clicked: false};
  },
  
  _closeVote(e, i) {
    this.setState({ clicked: true });
  },


  render() {
      
    var btnClass = 'list-group';
    if (this.state.clicked) btnClass += ' btn-pressed';
    
    let _this = this;
    return (
        <div>
            <Display if={!this.state.clicked}>
            <ul className={btnClass} onClick={this._closeVote} >
            
              {this.props.sites.votes.map(function(sites, index){
                return   (
                <Review key={index} sites={sites} emit={_this.props.emit}  />
                )
              })}
            </ul>
            </Display>
            <Display if={this.state.clicked}>
                <p>Your Have Voted</p>
            </Display>
        </div>
    );
  }

});

module.exports = reviceCtn;
