import React, { Component } from 'react';
import { Row, Col} from 'antd';
// import request from '../api/request';
import ReactEcharts from 'echarts-for-react';


import {optionGender } from './testData';

export default class Overall extends Component {

  getOption = (item) => {
    let option = {
    title: {
        text: '用户走势'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['新用户','老用户','活跃用户']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'新用户',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'老用户',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'活跃用户',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

    return option;
  }

  render() {
    return (
      <div>
        <ReactEcharts option={this.getOption()} />
        
        <Row>
          <Col span={12}>
            <ReactEcharts option={optionGender} />
          </Col>
          <Col></Col>
        </Row>
       
      </div>
    )
  }

}