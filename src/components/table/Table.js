import React, { Component } from 'react'
import { Form,Table, Input} from 'antd';
import {connect} from 'react-redux';

import  {fetchData} from '../../store/Actions';
import { Select } from 'antd';


class DataTable extends Component {

    state = {
        data: [],
        searchtext: '',
        filteredDate: [],
    }

    componentDidMount = async () => {
        await this.props.fetchData()

        let Cranking = 0;

        const  latestData = this.props.sortedData.sort(function(x,y){
        return y.cases -x.cases
        })
        .map(row => {
            Cranking++;
        return {
                ranking: Cranking,
                country: row.country,
                active:  row.active,
                cases:   row.cases,
                deaths: row.deaths,
                critical: row.critical,
                recovered: row.recovered,
                key: row.countryInfo.iso2


        }
    });

        this.setState({
            data: this.props.sortedData,
            filteredDate:latestData
        });
    }

    changeHandler = (e) => {
        let value = e.target.value;
        console.log('value is ', value)

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
        
    }

    onChange = (value) => {
        let Cranking = 0;
        if(value === 'cases')
        {
            let sortedData1 = this.state.filteredDate.sort(function(x,y){
                return    y.cases -x.cases
                }).map(row => {
                    Cranking++;
                return {
                    ranking: Cranking,
                        country: row.country,
                        active:  row.active,
                        cases:   row.cases,
                        deaths: row.deaths,
                        critical: row.critical,
                        recovered: row.recovered,
        
        
                };
                
            // console.log('sorted data: ', sortedData1);
            // this.setState({
            //     filteredDate: sortedData1
            
            });
            this.setState({
                filteredDate: sortedData1
            });
        }
        else if (value === 'recovered')
        {
            let sortedData1 = this.state.filteredDate.sort(function(x,y){
                return    y.recovered -x.recovered
                }).map(row => {
                    Cranking++;
                return {
                    ranking: Cranking,
                        country: row.country,
                        active:  row.active,
                        cases:   row.cases,
                        deaths: row.deaths,
                        critical: row.critical,
                        recovered: row.recovered,
        
        
                };
                
            // console.log('sorted data: ', sortedData1);
            // this.setState({
            //     filteredDate: sortedData1
            
            });
            this.setState({
                filteredDate: sortedData1
            });
        }
        else if (value === 'deaths')
        {
            let sortedData1 = this.state.filteredDate.sort(function(x,y){
                return    y.deaths -x.deaths
                }).map(row => {
                    Cranking++;
                return {
                    ranking: Cranking,
                        country: row.country,
                        active:  row.active,
                        cases:   row.cases,
                        deaths: row.deaths,
                        critical: row.critical,
                        recovered: row.recovered,
        
        
                };
                
            // console.log('sorted data: ', sortedData1);
            // this.setState({
            //     filteredDate: sortedData1
            
            });
            this.setState({
                filteredDate: sortedData1
            });
        }

        
       
        

        
                
    }
   
      
    render() {
        const { Option } = Select;


        
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
            dataIndex: 'deaths'
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
      const { searchtext} = this.state;
        return (
        <div>
            <div className="Toolbar">
            <div className="child1">Sort By:</div>
            <div className="child2">
                
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Sort By"
            optionFilterProp="children"
            onChange={this.onChange}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            >
            <Option value="cases">Cases</Option>
            <Option value="recovered">Recovered</Option>
            <Option value="deaths">Deaths</Option>
            </Select>
            </div>
            <div />
            <div />
            <div />
            <div />
            <div className="child3">Search</div>
            <div className="child4">
                <Form><Input type="text" name="searchtext" placeholder="Search" vlaue={searchtext} onChange={this.changeHandler} /></Form></div>

            </div>

            <Table columns={columns} dataSource={this.state.filteredDate} size="middle"  style={{margin: '20px 10px'}}/>

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
