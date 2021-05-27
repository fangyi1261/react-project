import React from 'react';
import '../style/planInsurance.less';

export default class PlanInsurance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const element = (
      <div className="plan-insurance">
        <div className="plan-insurance-left">
          <p className="plan-insurance-name">平安e生保·长期医疗(费率可调)</p>
          <p className="plan-insurance-plan">200万版</p>
        </div>
        <div className="plan-insurance-right">
          <div className="plan-insurance-money">
            <p className="plan-insurance-discount-money">1000</p>
            <p className="plan-insurance-actual-money">1200</p>
          </div>
          <div className="plan-insurance-check">
            <p></p>
          </div>
        </div>
      </div>
    );
    return element;
  }
}