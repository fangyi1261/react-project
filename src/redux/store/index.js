/**
 * index.js 文件就是整个项目的store文件
 */

import { createStore, applyMiddleware } from 'redux'; // 引入 createStore applyMiddleware方法
import reducer from '@/redux/reducer';                 // 引入reducer
import thunk from 'redux-thunk';                      // 引入thunk

// 创建数据存储仓库
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
// 使浏览器中redux-devtool插件生效
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store; // 将仓库暴露出去