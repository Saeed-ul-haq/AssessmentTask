import React, {Component} from 'react'
import 'antd/dist/antd.css';
// import './index.css';
import {connect} from 'react-redux';
import  {fetchData,fetchAllData} from '../../store/Actions';
import { Statistic,Card, Row, Col, Table,Form, Select, Skeleton } from 'antd';

import Axios from 'axios';


class Statistics extends Component {

    state = {
        data: [],
        countryData: [],
        countries: [],
        countryInfo: {},
        loading: false

    }

    componentDidMount = async () => {
        await this.props.fetchData();
        await this.props.fetchAllData();
        console.log('loader ', this.props.loading);
        
        this.setState({
          countryInfo: this.props.allCountryData,
          loading: this.props.loading
        });
        let sortedData1 = this.props.sortedData.sort((a,b) => {
          return b.cases -a.cases
        }).map((row) => {
          return {
            name: row.country,
            cases: <strong>{row.cases}</strong>
          }
        });
        this.setState({
          countryData: sortedData1
        });
        
          
        const getCountries = this.props.sortedData
        .map((country) => {
          return {
            name: country.country,
            value : country.countryInfo.iso2,
            key: country.countryInfo.iso3
          }
         
        });
        
        const getSCountries = getCountries.sort((a,b) => {
          if (a.name > b.name) {
            return 1;
        }
        if (b.name > a.name) {
            return -1;
        }
        return 0;
        });
        this.setState({
          countries: getSCountries
        });
        
      
               
 
        
     }

     onChange = async (value)  => {
      //  console.log(value);
       const countryCode = value;
    

       const url =
         countryCode === "worldwide"
           ? "https://disease.sh/v3/covid-19/all"
           : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
          //  await this.props.allCountryData(url)
       await Axios.get(url)
         .then((response) =>{
           
          this.setState({
            countryInfo: response.data
          })
         });
        
       
     }

     

    render () {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Cases',
          dataIndex: 'cases'
        }
      ];
      const {countries,countryInfo} = this.state;
      const { Option } = Select;
    return (
      <div className="static_app">
        
        <div className="app_left">
          <div className="app_header">
            <h3>COVID-19 stats</h3>
            <div className="app_dropdown">
              <Form>
              <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Worldwide"
              optionFilterProp="children"
              onChange={this.onChange}
              
              filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              >
              <Option value="worldwide" selected>Worldwide</Option>
            {countries.map(country => (
            <Option key={country.value} value={country.value}>{country.name}</Option>
            ))}
              
              </Select>
              </Form>
            </div>
          </div>
          <div  className="site-statistic-demo-card ">
          <Row gutter={16}>
            <Col span={8}>
              <Card className="cases">
                <Skeleton loading={this.state.loading} active paragraph={{rows: 2}}>
                <Statistic
                  title="Cases"
                  value={countryInfo.cases}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  
                  
                /></Skeleton>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="recover"> 
              <Skeleton loading={this.state.loading} active paragraph={{rows: 2}}>
                <Statistic
                  title="Recovered"
                  value={countryInfo.recovered}
                  precision={0}
                  valueStyle={{ color: '#cf1322' }}
                  
                  
                />
                </Skeleton>
              </Card>
            </Col>
           
            <Col span={8}>
              <Card className="death">
              <Skeleton loading={this.state.loading} active paragraph={{rows: 2}}>
                <Statistic
                  title="Deaths"
                  value={countryInfo.deaths}
                  precision={0}
                  valueStyle={{ color: '#cf1322' }}
                  
                  
                />
                </Skeleton>
              </Card>
            </Col>
          </Row>
            <br></br>
          <Row gutter={16}>
            <Col span={8}>
              <Card className="cases">
              <Skeleton loading={this.state.loading} active paragraph={{rows: 2}}>
                <Statistic
                  title="Today Cases"
                  value={countryInfo.todayCases}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  
                  
                />
                </Skeleton>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="recover"> 
              <Skeleton loading={this.state.loading} active paragraph={{rows: 2}}>
                <Statistic
                  title="Today Recovered"
                  value={countryInfo.todayRecovered}
                  precision={0}
                  valueStyle={{ color: '#cf1322' }}
                  
                  
                />
                </Skeleton>
              </Card>
            </Col>
            
            <Col span={8}>
              <Card className="death">
              <Skeleton loading={this.state.loading} active paragraph={{rows: 2}}>
                <Statistic
                  title="Today Deaths"
                  value={countryInfo.todayDeaths}
                  precision={0}
                  valueStyle={{ color: '#cf1322' }}
                  
                  
                />
                </Skeleton>
              </Card>
            </Col>
          </Row>
  </div>
        </div>
        
  <div className="app_right">
      <Card title="Live Cases by Country" bordered={true}>

        <Skeleton loading={false} active >
      <Table className="tables" pagination={false}  columns={columns} dataSource={this.state.countryData} />
      </Skeleton  >
      <h2>World wide new cases</h2>

      </Card>
  </div>
  </div>
    )
}}
const mapStateToProps = (state) => {
    return {
        sortedData: state.countryWiseData,
        allCountryData: state.allCountryData,
        loading: state.loading
    }
};
  
const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchData()),
    fetchAllData: () => dispatch(fetchAllData())
    
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Statistics);    
