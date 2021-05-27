// 组件模版
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '@/redux/actions/index.js';

class Office extends React.Component {
  componentDidMount() {
    this.props.action.getOfficeList();
  }
  
  handleOnRowClick(officeId) {
    this.props.action.getOfficeInfo(officeId);
  }

  render() {
    return <div>office</div>
  }
}

const mapStateToProps = (state) => {
  return {
    office: state.office,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(Actions, dispatch)
  }
}

// 最关键的一步，通过 react-redux 提供的 connect 函数将需要的 Reducer 和 Actions 绑定至当前页面
export default connect(mapStateToProps, mapDispatchToProps)(Office);