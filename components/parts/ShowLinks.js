var React = require('react');
var ReactDOM = require('react-dom');

var showLinks = React.createClass({

  
  addedSites(sites, i) {
    return(
      <div key={i} className="col-xs-12 col-sm-6 col-md-3">
        <a href={sites.intergration}>
          <p>{sites.intergration}</p>
        </a>  
        <p>Template: {sites.template}</p>

      </div>
    );
  },

  render() {
    return (
        <div>
            <h3>Websites to be reviewed</h3>
            {this.props.sites.map(this.addedSites)}
        </div>
    );
  }

});

module.exports = showLinks;
