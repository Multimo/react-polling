var React = require('react');
var Display = require('./Display')

var Ask = React.createClass({

  getInitialState() {
    return {
      choice: [],
      answer: undefined
    }
  },

  componentWillMount() {
    this.setUpChoices();
  },

  componentWillReceiveProps() {
    this.setUpChoices();
  },

  setUpChoices() {
    var choices = Object.keys(this.props.question);
    choices.shift();
    this.setState({
      choices: choices,
      answer: sessionStorage.answer
     });
  },

  select(choice) {
    this.setState({ answer: choice });
    sessionStorage.answer = choice;
    this.props.emit('answer', {
      question: this.props.questions,
      choice: choice
    });
  },

  addChoiceButton(choice, i) {

    var buttonTypes = ['primary', 'success', 'warning', 'danger']

    return(
      <button key={i}
        onClick={this.select.bind(null, choice)}
        className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]} >
        {choice}: {this.props.question[choice]}
      </button>
    )
  },

  render() {
      return (
        <div id="currentQuestion" >

          <Display if={this.state.answer}>
            <h3>You Answered: {this.state.answer}</h3>
            <p>{this.props.question[this.state.answers]}</p>
          </Display>

          <Display if={!this.state.answer}>
            <h2>{this.props.question.q}</h2>
            <div className="row">
              {this.state.choices.map(this.addChoiceButton)}
            </div>
          </Display>


        </div>
      );
  }
});

module.exports = Ask;
