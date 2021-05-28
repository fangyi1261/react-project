
import React from 'react';
import { connect } from 'react-redux';
import { getGender } from '@/redux/store/actionCreator.js';

class Demo extends React.Component {
  render() {
    return {}
  }
}

// 使用connect 关联，将会把 state(状态) 和 action(方法) 注入到当前类的参数里面（props）
// 使用 this.props.xxx 就可以调用类
export default connect(
  // state.gender 中的 gender 就是对应的reducer.js 中的function的方法名， 
  // redux 会将所有的状态（reducer）封装成一个对象，也就是我们需要的对象了。其中的函数名是键，state的值是值。
  state => ({ gender:  state.gender }),
  {
    getGender
  }
)(Demo)