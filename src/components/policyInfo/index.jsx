import React from 'react';
import './index.less';

export default function PolicyInfo (props) {
  console.log(props);
  return (
    <div>
      <div className="policy-title">投保人信息</div>
      <div className="policy-info">
        <div className="policy-info-item">
          <p>张三</p>
          <p>340826****1234</p>
        </div>
        <div className="policy-info-item">
          <p style={{color: 'red', marginRight: '6px'}}>信息不全，请补充</p>
          <p className="policy-info-editor"></p>
        </div>
      </div>
      <div className="devide-hold"></div>
    </div>
  );
}