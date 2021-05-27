import React from 'react';
import './index.less'

import PolicyInfo from '@/components/policyInfo';
import InsuranceBox from '@/components/insurance/components/insuranceBox.jsx';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('*********** component Index componentDidMount **********')
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