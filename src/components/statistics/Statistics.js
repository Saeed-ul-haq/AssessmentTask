import React, {Component} from 'react'
import 'antd/dist/antd.css';
// import './index.css';
import {connect} from 'react-redux';
import  {fetchData} from '../../store/Actions';
import { Statistic,Card, Row, Col, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Axios from 'axios';


class Statistics extends Component {

    state = {
        data: [],
        totalCases: 0,
        totalDeaths: 0,
        totalrecovered: 0

    }

    componentDidMount = async () => {
        await this.props.fetchData();
 
      
               
 
        
     }

     

    render () {
    return (
        <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={6}>
        <Card className="cases">
          <Statistic
            title="Cases"
            value={this.props.sortedData.reduce((a,b) => a +b.cases,0)}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="recover"> 
          <Statistic
            title="Recovered"
            value={this.props.sortedData.reduce((a,b) => a + b.recovered,0)}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="tests">
          <Statistic
            title="Tests"
            value={this.props.sortedData.reduce((a,b) => a + b.deaths,0)}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="death">
          <Statistic
            title="Deaths"
            value={this.props.sortedData.reduce((a,b) => a + b.deaths,0)}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
    </Row>
    <br></br>
    <Row gutter={16}>
      <Col span={6}>
        <Card className="cases">
          <Statistic
            title="Today Cases"
            value={this.props.sortedData.reduce((a,b) => a +b.todayCases,0)}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="recover"> 
          <Statistic
            title="Today Recovered"
            value={this.props.sortedData.reduce((a,b) => a + b.todayRecovered,0)}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="tests">
          <Statistic
            title="Today Tests"
            value={this.props.sortedData.reduce((a,b) => a + b.tests,0)}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="death">
          <Statistic
            title="Today Deaths"
            value={this.props.sortedData.reduce((a,b) => a + b.todayDeaths,0)}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
    </Row>
  </div>
    )
}}
const mapStateToProps = (state) => {
    return {
        sortedData: state.countryWiseData 
    }
};
  
const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchData()),
    
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Statistics);    
