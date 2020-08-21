import React, { Component } from 'react'
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
  } from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import  {fetchData} from '../../store/Actions';
import {connect} from 'react-redux';
import { Typography } from 'antd';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
class Home extends Component {

    state = {
        graphdata : []
    }

    componentDidMount = async () => {
        await this.props.fetchData()
 
        let id = 0;
         
        const  latestData = this.props.sortedData
      
          .map(row => {
            
              return {
                      state: row.country,
                      cases:   row.cases,
                      death: row.deaths,
                        
                        
                      }
          });
               
               
                     this.setState({
                         graphdata: latestData
                     });
                     console.log(this.state.graphdata)
     }
render() {
  const { Title } = Typography;

    const { graphdata } = this.state;
    return (
            <div className="card">
              <Title>Data in Visual Form</Title>
              <Chart
              data={graphdata}
              >
              <ArgumentScale factory={scaleBand} />
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
              valueField="cases"
              argumentField="state"
              name="deaths"
              />
              <BarSeries
              valueField="cases"
              argumentField="state"
              name="deaths"
              />
              <BarSeries
              valueField="cases"
              argumentField="state"
              name="deaths"
              />
              <Stack />
              </Chart>
            </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        sortedData: state.countryWiseData 
    }
};
  
const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchData()),
    
  })

export default connect(mapStateToProps,mapDispatchToProps)(Home);
