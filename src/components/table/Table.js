import React, { Component } from 'react'
import { Form,Table, Input, Button, Space, Row, Col} from 'antd';
import {connect} from 'react-redux';
import Axios from 'axios';
// import Highlighter from 'react-highlight-words';

class DataTable extends Component {

    state = {
        data: [],
        searchtext: '',
        searchcolumn: ''
    }

    componentDidMount = () => {
       let id = 0;
        Axios.get('https://disease.sh/v3/covid-19/countries')
        .then((res) => {
            const  latestData = res.data.sort(function(x,y){
                return y.cases -x.cases
              }).map(row => {
                  id++;
                  return {
                        ranking: id,
                         country: row.country,
                          active:  row.active,
                          cases:   row.cases,
                           death: row.deaths,
                            critical: row.critical,
                            recovered: row.recovered,

              
                  }
              });
              this.props.fetchData(latestData);
              this.setState({
                  data: latestData
              });

        })
        .catch(err => console.log(err));
    }

    changeHandler = (e) => {

    }
    render() {
        
    const columns = [
        {
          title: 'Ranking',
          dataIndex: 'ranking',
        },
        {
          title: 'Country',
          dataIndex: 'country',
        },
        {
          title: 'Cases',
          dataIndex: 'cases',
        },
        {
            title: 'Active',
            dataIndex: 'active'
        },
        {
            title: 'Death',
            dataIndex: 'death'
        },
        {
            title: 'Critical',
            dataIndex: 'critical'
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered'
        }
      ];
      const {data, searchtext, searchcolumn} = this.state;
        return (
            <div>
            {/* <Row>
                <col span={3}>Sort By:</col>
                <col span={3}><Input placeholder="Basic usage" /></col>
                <col span={12} />
                <col span={3}>Sort By:</col>
                <col span={3}><Input placeholder="Basic usage" /></col>
            </Row> */}
            <Row justify="space-between">
                <Col span={4}>Sort By: </Col>
                <Col span={4}><Input placeholder="Basic usage" /></Col>
                <Col span={4}>Search</Col>
                <Col span={4}><Form><Input type="text" name="searchtext" placeholder="Search" vlaue={searchtext} onChange={this.changeHandler} /></Form></Col>
             </Row>
           
    
        
         <Table columns={columns} dataSource={this.props.data} size="middle" style={{margin: '20px 10px'}}/>
         
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.arrayData
    }
};
  
  const mapDispatchToProps = (dispatch) => {
  
    return {
      fetchData: (arrayData) => {
          
        dispatch({ type: 'FETCH_DATA', data: arrayData })},
    //   addphoto: (postedPhoto) => dispatch({type: 'ADD_PHOTO', photo: postedPhoto})
  
    }
  
  }

export default connect(mapStateToProps,mapDispatchToProps)(DataTable);
