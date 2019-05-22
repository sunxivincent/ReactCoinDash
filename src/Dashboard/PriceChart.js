import highchartConfig from './HighchartConfig';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighCharts from 'react-highcharts';
import highchartTheme from './HighchartTheme';

ReactHighCharts.Highcharts.setOptions(highchartTheme);

export default function () {
  return (
    <AppContext.Consumer>
      {({historical}) =>
        <Tile>
          {
            historical ? <ReactHighCharts config={highchartConfig(historical)}/>
              : <div> Loading Historical Data </div>
          }
        </Tile>
      }
    </AppContext.Consumer>
  )
}