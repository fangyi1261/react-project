/**
 * reducer暴露出去的就是一个方法函数,有两个参数：state 和 action。
 * state: 是整个项目中需要管理的数据信息。
 */

/**
 * 一定要注意： reducer里只能接收state，不能改变state。
 * 不要认为把业务逻辑写在了reducer中，那改变state值的一定是reducer。
 * 其实不然，reducer只是返回了更改的数据，操作的是newState，但是并没有更改store中的state数据，store拿到了reducer的数据，自己对自己进行了更新。
 */
/* eslint-disable */
 import _ from 'lodash';
 import { CHANGE_INPUT, ADD_ITEM } from '../store/actionTypes.js';
 const defaultState = {
  inputValue: 'Write Something',
  list: []
 } // 默认数据
 export default (state = defaultState, action) => {
   if (action.type === CHANGE_INPUT) {
     let newState = _.cloneDeep(state) // 深度拷贝state
     newState.inputValue = action.value
     return newState;
   }
   if (action.type === ADD_ITEM) {
     let newState = JSON.parse(JSON.stringify(state))
     newState.list.push(newState.inputValue)  //push新的内容到列表中去
     newState.inputValue = ''
     return newState;
   }
   // 其他类似操作流程...
   return state;
 }


// import { combineReducers } from 'redux';
 
// const gender = (state={gender: 'M}, action) => {
//   switch(action.type) {
//     case 'getGender':
//       return action.data;
//     default: 
//       return state;
//   }
// }

// export default combineReducers({
//   gender: gender
// })