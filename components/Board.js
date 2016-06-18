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
      
          <Display if={!this.props.websiteLinks}>
          <h1>Hai</h1>
          </Display>
          
          <Display if={this.props.websiteLinks != undefined}>
            {console.log(this.props.websiteLinks)}
            <BarChart
                    axes={true}
                    colorBars
                    data={this._barGraphdata(this.props.websiteLinks)}
                    height={500}
                    width={600}
    
            />        
          </Display>

      </div>
    );
  }

}

module.exports = Board;


