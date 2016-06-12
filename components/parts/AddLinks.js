var React = require('react');
var ReactDOM = require('react-dom');

var AddLinks = React.createClass({

  add() {
    var template = ReactDOM.findDOMNode(this.refs.template).value;
    var intergration = ReactDOM.findDOMNode(this.refs.intergration).value;
 
    this.props.emit('add', { 
      template: template, 
      intergration: intergration, 
      votes: [0, 0, 0, 0, 0] 
    });
    ReactDOM.findDOMNode(this.refs.template).value = "";
    ReactDOM.findDOMNode(this.refs.intergration).value = "";
  },
  
  
  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.add}>
        <label>Link of intergration
        </label>
        <input ref="intergration" className="form-control" placeholder="Ugraded site goes here.." required/>

        <label>Original Template link
        </label>
        <input ref="template" className="form-control" placeholder="Whats the original template" required/>
        <button className="btn btn-primary join-btn">Add Link</button>
      </form>
    );
  }

});

module.exports = AddLinks;
