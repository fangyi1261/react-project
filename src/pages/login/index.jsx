import React from 'react';
import store from '@/redux/store/index';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      data: store.getState()
    };
  }
  // componentWillMount() {
  //   console.log('********** componentWillMount **********', this.state.isLogin);
  // }
  componentDidMount() {
    console.log('********** componentDidMount **********');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('********** shouldComponentUpdate **********', nextProps, nextState);
    // return true
  }
  // componentWillUpdate(nextProps, nextState) { // getSnapshotBeforeUpdate(prevProps, prevState)
  //   console.log('********** componentWillUpdate **********', nextProps, nextState);
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('********** componentDidUpdate **********', prevProps, prevState);
  }
  componentWillUnmount() {
    console.log('********** componentWillUnmount **********');
  }
  componentWillReceivedProps(nextProps) { // getDerivedStateFromProps(nextProps, prevState)
    console.log('********** componentWillReceivedProps **********', nextProps);
  }
  render() {
    const element = (
      <div>
        <span>登录页</span>
      </div>
    );
    return element;
  }
}