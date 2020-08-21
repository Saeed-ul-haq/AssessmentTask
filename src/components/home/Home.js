import React, { Component } from 'react'
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
  } from '@devexpress/dx-react-chart-bootstrap4';
  import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
  
import { scaleBand } from '@devexpress/dx-chart-core';
  import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
class Home extends Component {

    state = {
        graphdata : [{
            state: 'Germany',
            young: 70,
            middle: 50,
            older: 450,
          }, {
            state: 'Japan',
            young: 160,
            middle: 200,
            older: 500,
          }, {
            state: 'Russia',
            young: 135,
            middle: 249,
            older: 258,
          },  {
            state: 'USA',
            young: 30,
            middle: 90.3,
            older: 14.5,
          },]
    }
    render() {

        const { graphdata } = this.state;
        return (
            <div className="card">
        <Chart
          data={graphdata}
        >
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="young"
            argumentField="state"
            name="Young"
          />
          <BarSeries
            valueField="middle"
            argumentField="state"
            name="Middle"
          />
          <BarSeries
            valueField="older"
            argumentField="state"
            name="Older"
          />
          <Stack />
        </Chart>
      </div>
        )
    }
}

export default Home;
