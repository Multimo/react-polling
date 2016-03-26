import React from 'react'
import Display from './parts/Display'
import { BarChart } from 'react-d3'

class Board extends React.Component {


  barGraphdata(results) {


    var values =  Object.keys(results).map(function(choice){
      return {
          'x': choice,
          'y': results[choice]
        }
    });
    console.log(values);
    return [
   {
     "name": "Series A",
     "values": [values]
   }
 ]
  }

  render() {
    return (
      <div id="scoreboard">

        <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
          <BarChart data={this.barGraphdata(this.props.results)}
                    title={this.props.currentQuestion.q}
                    height={window.innerHeight * 0.6}
                    width={window.innerWidth * 0.9}
                    fill={'#3182bd'}
            />
        </Display>

        <Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
          <h3>Awaiting Question...</h3>
        </Display>


      </div>
    );
  }

}

module.exports = Board;

// /
