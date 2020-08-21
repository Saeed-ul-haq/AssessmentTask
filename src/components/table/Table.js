import React, { Component } from 'react'
import { Form,Table, Input, Button, Space, Row, Col} from 'antd';
import {connect} from 'react-redux';
import { Menu, Dropdown, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import  {fetchData} from '../../store/Actions';

import Axios from 'axios';
// import Highlighter from 'react-highlight-words';

class DataTable extends Component {

    state = {
        data: [],
        searchtext: '',
        searchcolumn: '',
        filteredDate: [],
        cases: 0
    }

    componentDidMount = async () => {
       await this.props.fetchData()

       let id = 0;
        
            const  latestData = this.props.sortedData.sort(function(x,y){
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
              
                    this.setState({
                        data: latestData,
                        filteredDate:latestData
                    });

                    // this.setState({
                    //     cases: this.state.data.reduce((a,b) => a + b.cases, 0)
                    // });
                    // console.log('all cases' , this.state.cases);
              

       
    }

    changeHandler = (e) => {
        let value = e.target.value;

        if(value !== ""){
            this.setState({
                searchtext: value
            });
            this.setState({
                filteredDate : this.state.data.filter((v) => v.country.toLowerCase().includes(value.toLowerCase()))
            });
        }
        else {
            this.setState({
                filteredDate: this.state.data
            });
        }
        // this.setState({
        //     filteredDate: this.state.data
        // });
        
        

        console.log(e.target.value);
    }
    handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };
      
       handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      }
    render() {

        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1" >
                1st menu item
              </Menu.Item>
              <Menu.Item key="2" >
                2nd menu item
              </Menu.Item>
              <Menu.Item key="3" >
                3rd menu item
              </Menu.Item>
            </Menu>
          );
        
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
                <div className="Toolbar">
                    <div className="child1">Sort By:</div>
                    <div className="child2"><Dropdown overlay={menu}>
      <Button>
        Button <DownOutlined />
      </Button>
    </Dropdown></div>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div className="child3">Search</div>
                    <div className="child4"><Form><Input type="text" name="searchtext" placeholder="Search" vlaue={searchtext} onChange={this.changeHandler} /></Form></div>

                </div>
            {/* <Row>
                <col span={3}>Sort By:</col>
                <col span={3}><Input placeholder="Basic usage" /></col>
                <col span={12} />
                <col span={3}>Sort By:</col>
                <col span={3}><Input placeholder="Basic usage" /></col>
            </Row> */}
           
           
    
        
         <Table columns={columns} dataSource={this.state.data} size="middle" style={{margin: '20px 10px'}}/>
         
        </div>
        );
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

export default connect(mapStateToProps,mapDispatchToProps)(DataTable);
