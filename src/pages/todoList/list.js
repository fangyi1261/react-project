import React from 'react';
import store from '@/redux/store/index' // 在组件中引入store
import { addItemAction } from '@/redux/store/actionCreators';

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    // store.subscribe(this.storeChange)
  }
  componentDidMount() {
    store.subscribe(this.storeChange)
  }
  storeChange = () => {
    this.setState(store.getState())
  }

  clickBtn = () => {
    const action = addItemAction() // 返回一个对象{type: ADD_ITEM}
    store.dispatch(action) // 通过dispatch()方法将action传递给store
  }
  changeInputValue(e) {
    console.log('********* 打印input change event ********', e.target.value);
    return store.dispatch({
      type: 'changeInput',
      value: e.target.value
    })
  }

  render(){
    return(
      <div>
        <label>姓名：</label>
        <input value={ this.state.inputValue } onChange={ (e) => this.changeInputValue(e) }/>
        <button onClick={ this.clickBtn }>增加</button>
        <div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <li key={ index }>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default List;