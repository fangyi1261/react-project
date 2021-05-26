import React from 'react';
import '../style/insurancePage.less';
import PlanInsurance from './planInsurance.jsx';

export default class InsurancePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="insurance-page">
        <div className="insurance-page-title">
          重新投保计划
        </div>
        <div className="insurance-page-tabs">
          {
            ['推荐套餐一', '推荐套餐二', '推荐套餐三', '自定义'].map(item => {
              const element = <div className="page-item-tab" key={item}>
                <span>{item}</span>
                {/* <p className="page-item-tab-recommend">推荐</p> */}
                <p className="page-item-tab-check"></p>
              </div>
              return element;
            })
          }
        </div>
        <div className="insurance-page-detail">
          {
            [1, 2, 3].map((item, index) => {
              return <PlanInsurance key={index}></PlanInsurance>
            })
          }
        </div>
      </div>
    );
  }
}