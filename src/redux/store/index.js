/**
 * index.js 文件就是整个项目的store文件
 */

import { createStore, applyMiddleware } from 'redux'; // 引入 createStore applyMiddleware方法
import reducer from '@/redux/reducer';                 // 引入reducer
import thunk from 'redux-thunk';                      // 引入thunk
import { composeWithDevTools } from 'redux-devtools-extension'; // 打开react-redux-devtools

let enhancers = null;
if(process.env.NODE_ENV === 'development') {
  enhancers = composeWithDevTools(applyMiddleware(thunk));
} else {
  enhancers = applyMiddleware(thunk);
}

// 创建数据存储仓库
const store = createStore(
  reducer,
  enhancers
);
// 未使用applyMiddleware,使浏览器中redux-devtool插件生效
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store; // 将仓库暴露出去