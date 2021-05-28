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
              </div>;
              return element;
            })
          }
        </div>
        <div className="insurance-page-detail">
          <div className="insurance-page-tabs-describe">
            <div className="page-tabs-describe">
              <span>套餐简介：套餐推荐描述文案最多不超出两行套餐推荐描述文案最多两行</span>
            </div>
            <div className="compare-line"></div>
            <div className="last-compare">
              <span>对比上一年</span>
            </div>
          </div>
          <div className="insurance-health-notice">
            点击进行健康告知
          </div>
          {
            [1, 2, 3].map((item, index) => {
              return <PlanInsurance key={index}></PlanInsurance>;
            })
          }
        </div>
      </div>
    );
  }
}