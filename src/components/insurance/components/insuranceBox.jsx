import React from 'react';
import '../style/insuranceBox.less';

import InsuranceCard from './insuranceCard.jsx';

class InsuranceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="insurance-box">
        <div className="insurance-box-title">被保险人及保障计划选择</div>
        <InsuranceCard></InsuranceCard>
      </div>
    );
  }

}

export default InsuranceBox;