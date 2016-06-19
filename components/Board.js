import React from 'react'
import Display from './parts/Display'
// import { BarChart } from 'react-d3'
import {BarChart} from 'react-easy-chart';

class Board extends React.Component {


  _barGraphdata(sites) {
    return sites.map(function(site){
      return {
          'x': site.template,
          'y': site.totalVotes
      }
    });
  }


    


  render() {
    return (
      <div id="scoreboard">
            {console.log(this.props)}
      
          <Display if={this.props.websiteLinks.length <= 0 }>
          <h1>Hai</h1>
          </Display>
          
          <Display if={this.props.websiteLinks.length >= 1 }>
            <BarChart
                    axes={true}
                    colorBars
                    data={this._barGraphdata(this.props.websiteLinks)}
                    height={500}
                    width={600} > 
            </BarChart>
          </Display>

      </div>
    );
  }

}

module.exports = Board;


