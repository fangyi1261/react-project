import React from 'react';
import './index.less'

import http from '@/api/index.js';
import ComApi from '@/api/common/index.js';

import PolicyInfo from '@/components/policyInfo';
import InsuranceBox from '@/components/insurance/components/insuranceBox.jsx';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('*********** component Index componentDidMount **********');
    // http://m-stg1.health.pingan.com/ehs-r/index.html?policyNo=KEqf37sA3cmF9Nnyl/zm17BCZX1GRkOPkdw0mYVdcRC=&renewalSourceCode=SMS#/
    this.fetchData();
  }

  fetchData() {
    const params = {
      policyNo: '123456',
      renewalSourceCode: 'SMS'
    };
    http.post(ComApi.fetchIndexPage, params).then(res => {
      console.log('********* 首页接口请求返回值 *********:', res);
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <React.Fragment>
        <header className="index-root">
          <span className="back-arrow"></span>
          <span>续保</span>
          <span></span>
        </header>
        <PolicyInfo/>
        <InsuranceBox/>
        <div className="add-family">
          <p>为更多家人添加保障</p>
        </div>
      </React.Fragment>
    );
  }
}