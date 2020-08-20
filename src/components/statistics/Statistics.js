import React from 'react'
import 'antd/dist/antd.css';
// import './index.css';
import { Statistic,Card, Row, Col, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


export default function Statistics() {
    return (
        <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={6}>
        <Card className="cases">
          <Statistic
            title="Cases"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="recover"> 
          <Statistic
            title="Recovered"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="tests">
          <Statistic
            title="Tests"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="death">
          <Statistic
            title="Deaths"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            
            
          />
        </Card>
      </Col>
    </Row>
  </div>
    )
}
