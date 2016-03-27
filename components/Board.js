import React from 'react'
import Display from './parts/Display'
// import { BarChart } from 'react-d3'
import {BarChart} from 'react-easy-chart';

class Board extends React.Component {


  barGraphdata(results) {
     return Object.keys(results).map(function(choice){
      return {
          'x': choice,
          'y': results[choice]
        }
    });
  }

  render() {
    return (
      <div id="scoreboard">

        <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
          <BarChart
                    axes={true}
                    colorBars
                    data={this.barGraphdata(this.props.results)}
                    height={500}
                    width={600}

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
