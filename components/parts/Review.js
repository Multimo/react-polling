var React = require('react');

var Classnames = require('classnames');

var review = React.createClass({
  
  _handleVote(e, i) {
    //grab what was clicked based on react id
    var key = e.dispatchMarker.split('');
    var x = key.indexOf('$');
    var site = key[x+1];
    var votes = key.pop();
    
    //emit and log vote to app-server
    console.log("site = %s, vote = %s", site, votes);
    this.props.emit('vote', { 
      site: site, 
      vote: votes, 
    });
    
  },


  render() {
    var btnClass = 'list-group-item';
   
    return (
        <li className={btnClass}  onClick={this._handleVote}> 
            {this.props.number}
        </li>
    );
  }

});

module.exports = review;
