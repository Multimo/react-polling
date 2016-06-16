import React from 'react'
import Display from './parts/Display'
// import { BarChart } from 'react-d3'
import {BarChart} from 'react-easy-chart';

class Board extends React.Component {


  barGraphdata(sites) {
    console.log(sites)
     return sites.map(function(site){
      return {
          'x': site.template,
          'y': site.votes
      }
    });
  }

  render() {
    return (
      <div id="scoreboard">
          <BarChart
                    axes={true}
                    colorBars
                    data={this.barGraphdata(this.props)}
                    height={500}
                    width={600}

            />
      </div>
    );
  }

}

module.exports = Board;

// /
