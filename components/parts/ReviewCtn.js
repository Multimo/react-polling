var React = require('react');


var Display = require('./Display');

var Review = require('./Review');

var reviceCtn = React.createClass({
  
  getInitialState: function() {
    return {clicked: false};
  },
  
  // need to set up a way for refresh to put up whether component has been voted on or not
  // componentWillMount() {
  //   this.checkVotes();
  // },

  // componentWillReceiveProps() {
  //   this.checkVotes();
  // },

  // checkVotes() {
  //   this.setState({
  //     clicked: sessionStorage.clicked
  //   });
  // },
  
  _closeVote(e, i) {
    // console.log(i);
    // console.log(e);
    // sessionStorage.clicked = true;
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
                <Review key={index} number={index++} sites={sites} emit={_this.props.emit}  />
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
