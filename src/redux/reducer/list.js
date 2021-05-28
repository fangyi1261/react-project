import _ from 'lodash';
import { CHANGE_INPUT, ADD_ITEM } from '../store/actionTypes.js';
const defaultState = {
 inputValue: 'Write Something',
 list: []
}; // 默认数据
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    const newState = _.cloneDeep(state); // 深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  // 其他类似操作流程...
  return state;
};
