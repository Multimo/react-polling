var React = require('react');

var Classnames = require('classnames');
var Display = require('./Display');

var ReviewCtn = require('./ReviewCtn');

var Review = require('./Review');

var showLinks = React.createClass({
  

  addedSites(sites, i) {

        
    let _this = this;
    
    return(
      <div key={i} className="col-xs-12 col-sm-6 col-md-3">
        
        <a href={sites.intergration}> 
          <p>{sites.intergration}</p>
        </a>  
        <p>Template: {sites.template}</p>
        
       <ReviewCtn sites={sites} emit={this.props.emit} />
            
      </div>
    );
  },

  render() {
    return (
        <div>
            <h3>Websites to be reviewed</h3>
            {this.props.sites.map(this.addedSites, this)}
        </div>
    );
  }

});

module.exports = showLinks;
