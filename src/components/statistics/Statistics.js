import React, {Component} from 'react'
import 'antd/dist/antd.css';
// import './index.css';
import {connect} from 'react-redux';
import  {fetchData} from '../../store/Actions';
import  {getAllData} from '../../store/Actions';
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
        await this.props.getAllData();
        await this.props.fetchData();
 
        // let id = 0;

    //   let response =  await Axios.get('https://disease.sh/v3/covid-19/all');
        // console.log('this is response' ,response);
         
            //  const  latestData = this.props.sortedData.sort(function(x,y){
            //      return y.cases -x.cases
            //    }).map(row => {
            //        id++;
            //        return {
            //              ranking: id,
            //               country: row.country,
            //                active:  row.active,
            //                cases:   row.cases,
            //                 death: row.deaths,
            //                  critical: row.critical,
            //                  recovered: row.recovered,
 
               
            //        }
            //    });
            
            // this.setState({
            //     totalCases: this.props.sortedData.reduce((a,b) => a + b.cases, 0 )
            // })
            //    const cases = latestData.reduce((a,b) => a + b.cases,0);
               
                    //  this.setState({
                    //      data: latestData,
                    //      totalCases: cases
                    //  });
                    this.setState({
                        totalDeaths: this.props.sortedData.reduce((a,b) => a + b.deaths, 0),
                        recovered: this.props.sortedData.reduce((a,b) => a + b.recovered, 0)
                    });
               
 
        
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
            title="Tests"
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
        allData: state.AllData ,
        sortedData: state.countryWiseData 
    }
};
  
const mapDispatchToProps = (dispatch) => ({
    getAllData: () => dispatch(getAllData()),
    fetchData: () => dispatch(fetchData()),
    
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Statistics);    
