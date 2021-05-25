import React from 'react';
import store from '@/store/index' // 在组件中引入store

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState() // 从store中获取state数据
    store.subscribe(this.storeChange) // 订阅Redux的状态
  }

  /**
   * 当订阅的redux状态变化时，使用setState()方法，将新的数据存入state中。
   */
  storeChange = () => {
    this.setState(store.getState())
  }
}

export default TodoList;