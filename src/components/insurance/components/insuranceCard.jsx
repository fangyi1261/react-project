import React from 'react';
import '../style/insuranceCard.less';

import InsurancePage from '../components/insurancePage.jsx';

class InsuranceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="insurance-card">
        <div className="insurance-card-info">
          <div className="insurance-card-info-item">
            <p className="insurance-info name">张三</p>
            <p className="insurance-info sex"><span></span></p>
            <p className="insurance-info social-security">有社保</p>
            <p className="insurance-info editor"></p>
          </div>
          <div className="insurance-card-info-item">
            <p className="warning">信息不全，请补充</p>
            <p className="check"></p>
          </div>
        </div>
        <InsurancePage></InsurancePage>
      </div>
    );
  }
}

export default InsuranceCard;