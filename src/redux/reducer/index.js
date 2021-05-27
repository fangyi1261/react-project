/**
 * reducer暴露出去的就是一个方法函数,有两个参数：state 和 action。
 * state: 是整个项目中需要管理的数据信息。
 * 
 * 一定要注意：reducer里只能接收state，不能改变state。
 * 不要认为把业务逻辑写在了reducer中，那改变state值的一定是reducer。
 * 其实不然，reducer只是返回了更改的数据，操作的是newState，但是并没
 * 有更改store中的state数据，store拿到了reducer的数据，自己对自己进
 * 行了更新。
 */

 import { combineReducers } from 'redux';

 import officeReducer from './office';
 import userReducer from './user';
 import listReducer from './list';
 
 const appReducer = combineReducers({
     office: officeReducer,
     user: userReducer,
     list: listReducer
 });
 export default appReducer;