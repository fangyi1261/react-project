import React from 'react';
import store from '@/redux/store/index' // 在组件中引入store

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }
  componentDidMount() {
    store.subscribe(this.storeChange);
    console.log(this.state);
  }
  storeChange = () => {
    this.setState(store.getState())
  }

  clickBtn = () => {
    store.dispatch({type: 'addItem'});
  }
  changeInputValue(e) {
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
              this.state.list.list.map((item, index) => {
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